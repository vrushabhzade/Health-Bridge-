/**
 * Symptom Matcher Service
 * Matches user symptoms against the historical dataset
 */

/**
 * Normalize and tokenize symptom text into keywords
 */
export const tokenizeSymptoms = (text) => {
    if (!text) return [];

    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ') // Remove punctuation
        .split(/\s+/)
        .filter(word => word.length > 2) // Filter short words
        .filter(word => !['and', 'the', 'have', 'feel', 'feeling', 'experiencing'].includes(word));
};

/**
 * Calculate match score between user symptoms and dataset symptoms
 * Returns a score from 0-100
 */
export const calculateMatchScore = (userSymptoms, datasetSymptoms) => {
    const userTokens = tokenizeSymptoms(userSymptoms);
    const datasetTokens = datasetSymptoms.map(s => s.toLowerCase());

    if (userTokens.length === 0) return 0;

    let matchCount = 0;
    userTokens.forEach(token => {
        if (datasetTokens.some(ds => ds.includes(token) || token.includes(ds))) {
            matchCount++;
        }
    });

    return Math.round((matchCount / userTokens.length) * 100);
};

/**
 * Find similar cases from the dataset
 */
export const findSimilarCases = async (userSymptoms, dataset) => {
    if (!userSymptoms || !dataset) return [];

    const matches = dataset
        .map(record => ({
            ...record,
            matchScore: calculateMatchScore(userSymptoms, record.symptoms)
        }))
        .filter(record => record.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);

    return matches;
};

/**
 * Get top N matches
 */
export const getTopMatches = (matches, limit = 10) => {
    return matches.slice(0, limit);
};

/**
 * Aggregate insights from matching cases
 */
export const aggregateInsights = (matches) => {
    if (!matches || matches.length === 0) {
        return {
            totalMatches: 0,
            diseases: {},
            avgConfidence: 0,
            severityDistribution: {},
            topDisease: null,
            avgMatchScore: 0
        };
    }

    const diseases = {};
    const severityDistribution = { Mild: 0, Moderate: 0, Severe: 0 };
    let totalConfidence = 0;
    let totalMatchScore = 0;

    matches.forEach(match => {
        // Count diseases
        diseases[match.predictedDisease] = diseases[match.predictedDisease] || {
            count: 0,
            totalConfidence: 0,
            severity: {}
        };
        diseases[match.predictedDisease].count++;
        diseases[match.predictedDisease].totalConfidence += match.confidenceScore;
        diseases[match.predictedDisease].severity[match.severity] =
            (diseases[match.predictedDisease].severity[match.severity] || 0) + 1;

        // Count severity
        severityDistribution[match.severity]++;

        // Sum confidence and match scores
        totalConfidence += match.confidenceScore;
        totalMatchScore += match.matchScore;
    });

    // Calculate averages
    const avgConfidence = Math.round(totalConfidence / matches.length);
    const avgMatchScore = Math.round(totalMatchScore / matches.length);

    // Find top disease
    const sortedDiseases = Object.entries(diseases)
        .map(([name, data]) => ({
            name,
            count: data.count,
            avgConfidence: Math.round(data.totalConfidence / data.count),
            severity: data.severity
        }))
        .sort((a, b) => b.count - a.count);

    const topDisease = sortedDiseases[0] || null;

    return {
        totalMatches: matches.length,
        diseases: sortedDiseases,
        avgConfidence,
        severityDistribution,
        topDisease,
        avgMatchScore
    };
};

/**
 * Get severity level from distribution
 */
export const getMostLikelySeverity = (severityDistribution) => {
    const entries = Object.entries(severityDistribution);
    if (entries.length === 0) return 'Unknown';

    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
};

/**
 * Format insights for display
 */
export const formatInsights = (insights) => {
    if (!insights || insights.totalMatches === 0) {
        return {
            summary: 'No similar cases found in our database.',
            hasMatches: false
        };
    }

    const { topDisease, totalMatches, avgConfidence, avgMatchScore, severityDistribution } = insights;
    const mostLikelySeverity = getMostLikelySeverity(severityDistribution);

    return {
        summary: `Found ${totalMatches} similar case${totalMatches > 1 ? 's' : ''} in our medical database.`,
        topDisease: topDisease.name,
        diseaseCount: topDisease.count,
        confidence: avgConfidence,
        matchScore: avgMatchScore,
        severity: mostLikelySeverity,
        hasMatches: true,
        allDiseases: insights.diseases
    };
};
