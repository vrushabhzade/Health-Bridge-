// Comprehensive test for all available Gemini models
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDb9JjZ061K-fKCIA8RqEh8FlYpIupRUUs";

const modelsToTest = [
    "gemini-2.5-flash",
    "gemini-2.5-pro",
    "gemini-3-flash-preview",
    "gemini-3-pro-preview",
    "gemini-pro",
    "gemini-1.5-flash",
    "gemini-1.5-pro"
];

async function testAllModels() {
    console.log('🧪 Testing all Gemini models...\n');

    for (const modelName of modelsToTest) {
        try {
            console.log(`\n📡 Testing model: ${modelName}`);
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent("Say hello");
            const response = await result.response;
            const text = response.text();

            console.log(`✅ SUCCESS with ${modelName}!`);
            console.log(`Response: ${text.substring(0, 50)}...`);
            console.log(`\n🎉 WORKING MODEL FOUND: ${modelName}\n`);
            break; // Stop after first successful model

        } catch (error) {
            console.log(`❌ Failed with ${modelName}: ${error.message}`);
        }
    }
}

testAllModels();
