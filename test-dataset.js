// Simple test file to verify dataset loading and symptom matching
import { loadSymptomDataset } from './src/utils/dataLoader.js';
import { findSimilarCases, aggregateInsights, formatInsights } from './src/services/symptomMatcher.js';

async function testDatasetIntegration() {
    console.log('🧪 Testing Dataset Integration...\n');

    try {
        // Test 1: Load dataset
        console.log('Test 1: Loading dataset...');
        const dataset = await loadSymptomDataset();
        console.log(`✅ Dataset loaded: ${dataset.length} records\n`);

        // Test 2: Find similar cases
        console.log('Test 2: Finding similar cases for "headache and blurred vision"...');
        const testSymptoms = 'headache and blurred vision';
        const similarCases = await findSimilarCases(testSymptoms, dataset);
        console.log(`✅ Found ${similarCases.length} similar cases\n`);

        // Test 3: Aggregate insights
        console.log('Test 3: Aggregating insights...');
        const insights = aggregateInsights(similarCases);
        console.log('✅ Insights:', JSON.stringify(insights, null, 2), '\n');

        // Test 4: Format insights
        console.log('Test 4: Formatting insights...');
        const formatted = formatInsights(insights);
        console.log('✅ Formatted:', JSON.stringify(formatted, null, 2), '\n');

        console.log('✅ All tests passed!');

    } catch (error) {
        console.error('❌ Test failed:', error);
    }
}

testDatasetIntegration();
