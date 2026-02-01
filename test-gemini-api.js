// Quick test to verify Gemini API is working
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDb9JjZ061K-fKCIA8RqEh8FlYpIupRUUs";

async function testGeminiAPI() {
    console.log('🧪 Testing Gemini API connection...\n');

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        console.log('📡 Sending test prompt...');
        const result = await model.generateContent("Say hello in one sentence.");
        const response = await result.response;
        const text = response.text();

        console.log('✅ SUCCESS! Gemini API is working!');
        console.log('Response:', text);
        console.log('\n✨ The API key is valid and working correctly.\n');

    } catch (error) {
        console.error('❌ FAILED! Gemini API test failed:');
        console.error('Error:', error.message);
        console.error('Full error:', error);

        if (error.message.includes('API key')) {
            console.error('\n⚠️  API Key issue detected!');
        } else if (error.message.includes('quota')) {
            console.error('\n⚠️  API quota exceeded!');
        } else if (error.message.includes('network')) {
            console.error('\n⚠️  Network connection issue!');
        }
    }
}

testGeminiAPI();
