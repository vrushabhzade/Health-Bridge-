import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadSymptomDataset } from '../utils/dataLoader';
import { findSimilarCases, aggregateInsights, formatInsights } from './symptomMatcher';

// API Key - Updated January 31, 2026
const API_KEY = "AIzaSyA_bRDExpJBx8bkKFe2S1DkSUwNFHBNhoA";

const genAI = new GoogleGenerativeAI(API_KEY);
// Updated to use gemini-2.5-flash (current stable model in 2026, retires June 17, 2026)
// Alternative: gemini-3-flash-preview (latest but preview), gemini-2.5-pro (more powerful)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

/**
 * Enhanced Symptom Analysis with dataset integration and deeper personalization
 */
export const analyzeSymptoms = async (symptoms, language = 'English', user = null) => {
  console.log('🔍 Starting symptom analysis...', { symptoms, language, user: user?.name });

  let datasetInsights = { hasMatches: false };
  let rawInsights = null;
  let datasetContext = '';

  try {
    // Try to load dataset and find similar cases
    try {
      console.log('📊 Loading dataset...');
      const dataset = await loadSymptomDataset();
      console.log('✅ Dataset loaded:', dataset?.length, 'records');

      if (dataset && dataset.length > 0) {
        console.log('🔎 Finding similar cases...');
        const similarCases = await findSimilarCases(symptoms, dataset);
        console.log('✅ Found', similarCases?.length, 'similar cases');

        rawInsights = aggregateInsights(similarCases);
        datasetInsights = formatInsights(rawInsights);
        console.log('✅ Insights formatted:', datasetInsights);

        // Build dataset context for AI
        if (datasetInsights.hasMatches) {
          datasetContext = `
      HISTORICAL DATA CONTEXT:
      - Found ${rawInsights.totalMatches} similar cases in our medical database
      - Most common prediction: ${datasetInsights.topDisease} (${datasetInsights.diseaseCount} cases)
      - Average confidence from historical data: ${datasetInsights.confidence}%
      - Most likely severity: ${datasetInsights.severity}
      - Match quality: ${datasetInsights.matchScore}% similarity
      
      Disease distribution in similar cases:
${rawInsights.diseases.slice(0, 3).map(d => `      - ${d.name}: ${d.count} cases (${d.avgConfidence}% avg confidence)`).join('\n')}
          `;
        } else {
          datasetContext = `
      HISTORICAL DATA CONTEXT:
      - No exact matches found in our database for these specific symptoms
      - This may be a unique case requiring careful evaluation
          `;
        }
      }
    } catch (datasetError) {
      console.warn("⚠️ Dataset loading failed, continuing with AI-only analysis:", datasetError);
      datasetContext = '';
    }

    const personalizationContext = user
      ? `
        PATIENT PROFILE:
        - Name: ${user.name}
        - Role: ${user.role}
        - Health Focus: Needs clear, actionable guidance ${user.role === 'patient' ? 'as a local Nagpur resident' : 'as a medical professional'}.
        `
      : "The user is an anonymous resident of Nagpur.";

    const prompt = `
      Act as "HealthBridge AI", a highly specialized medical assistant for the Nagpur Health Network.
      
      CONTEXT:
      ${personalizationContext}
      ${datasetContext}
      Language for response: ${language}
      User Input: "${symptoms}"
      
      GUIDELINES:
      - Be empathetic, professional, and culturally sensitive to Nagpur's urban and rural context.
      - Use the user's name (${user?.name || 'there'}) naturally in the greeting.
      ${datasetContext ? '- Reference the historical data context to provide evidence-based insights.' : ''}
      - If symptoms are critical (chest pain, severe bleeding, difficulty breathing), emphasize calling 108 immediately.
      
      STRUCTURED OUTPUT (Required):
      1. **Personalized Assessment**: Acknowledge the user and summarize their symptoms.
      ${datasetContext ? '2. **Dataset Insights**: Mention what our historical data shows about similar cases.' : ''}
      ${datasetContext ? '3' : '2'}. **Potential Insight**: Identify 2-3 likely medical directions (disclaim: non-diagnostic).
      ${datasetContext ? '4' : '3'}. **Urgency Score**: (Low | Medium | High | Critical) - highlight this clearly.
      ${datasetContext ? '5' : '4'}. **Local Action Plan**: Provide specific home-care tips or nearby Nagpur-specific hospital recommendations (GMC, Mayo, Kingsway).
      ${datasetContext ? '6' : '5'}. **Next Step**: Specifically advise whether to book a teleconsultation or visit a PHC.
    `;

    console.log('🤖 Calling Gemini AI...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiText = response.text();
    console.log('✅ AI response received:', aiText.substring(0, 100) + '...');

    // Return both AI response and dataset insights
    return {
      aiResponse: aiText,
      datasetInsights: datasetInsights,
      rawInsights: rawInsights
    };
  } catch (error) {
    console.error("❌ AI Analysis Error:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    return {
      aiResponse: "I'm having trouble connecting to my medical intelligence database. Please consult a doctor at the nearest PHC if your symptoms persist.",
      datasetInsights: { hasMatches: false },
      rawInsights: null,
      error: error.message
    };
  }
};

/**
 * Lab Interpretation with trend awareness (context can be added later)
 */
export const analyzeLabResults = async (metrics, language = 'English') => {
  try {
    const prompt = `
      Act as a Nagpur-based lab diagnostic assistant. Interpret these metrics:
      ${JSON.stringify(metrics)}
      
      Response Format (${language}):
      - A concise summary of the findings.
      - 1-2 practical lifestyle tips tailored for residents of Nagpur (e.g., local dietary habits, seasonal weather adjustments).
      - A strong medical disclaimer.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Lab Analysis Error:", error);
    return "Could not analyze lab data at this time.";
  }
};

/**
 * Simplify Prescriptions for rural/urban patients
 */
export const explainPrescription = async (prescription, language = 'English') => {
  try {
    const prompt = `
      Act as a helpful community health worker in Nagpur. Explain this prescription:
      Diagnosis: ${prescription.diagnosis}
      Medicines: ${JSON.stringify(prescription.medicines)}
      
      Goal: Explain IN SIMPLEST TERMS in ${language}:
      - What the condition means for their daily life.
      - Why they are taking these specific medicines.
      - 3 actionable tips for recovery.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Explanation Error:", error);
    return "Could not generate explanation at this time.";
  }
};
