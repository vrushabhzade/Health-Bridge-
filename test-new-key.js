// Test the new API key
import { GoogleGenerativeAI } from "@google/generative-ai";

const NEW_API_KEY = "AIzaSyA_bRDExpJBx8bkKFe2S1DkSUwNFHBNhoA";

async function testNewKey() {
    console.log('🧪 Testing NEW API Key...\n');

    try {
        const genAI = new GoogleGenerativeAI(NEW_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        console.log('📡 Sending test request to Gemini...');
        const result = await model.generateContent("Say hello in one sentence.");
        const response = await result.response;
        const text = response.text();

        console.log('\n✅ SUCCESS! API Key is working!');
        console.log('Response:', text);
        console.log('\n🎉 The symptom checker should now work!\n');

    } catch (error) {
        console.error('\n❌ FAILED!');
        console.error('Error:', error.message);
        console.error('\nPlease check if the API key is correct.\n');
    }
}

testNewKey();
