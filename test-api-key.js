// Direct test with the provided API key
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDb9JjZ061K-fKCIA8RqEh8FlYpIupRUUs";

async function testAPIKey() {
    console.log('🔑 Testing API Key:', API_KEY.substring(0, 20) + '...\n');

    const modelsToTest = [
        "gemini-2.5-flash",
        "gemini-2.5-pro",
        "gemini-1.5-flash",
        "gemini-1.5-pro"
    ];

    for (const modelName of modelsToTest) {
        try {
            console.log(`\n📡 Testing: ${modelName}`);
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent("Hello");
            const response = await result.response;
            const text = response.text();

            console.log(`✅ SUCCESS with ${modelName}!`);
            console.log(`Response: ${text}`);
            console.log(`\n🎉 This model works! Update ai.js to use: ${modelName}\n`);
            return; // Exit on first success

        } catch (error) {
            console.log(`❌ ${modelName} failed`);
            console.log(`   Error: ${error.message}`);
            if (error.status) console.log(`   Status: ${error.status}`);
            if (error.statusText) console.log(`   Status Text: ${error.statusText}`);
        }
    }

    console.log('\n\n❌ ALL MODELS FAILED!');
    console.log('\n🔴 This means the API key is invalid, expired, or restricted.');
    console.log('\n📝 Please:');
    console.log('1. Visit: https://makersuite.google.com/app/apikey');
    console.log('2. Generate a NEW API key');
    console.log('3. Replace the key in src/services/ai.js line 6');
}

testAPIKey();
