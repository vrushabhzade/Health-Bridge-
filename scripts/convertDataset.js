import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Convert CSV to JSON and save to public/data directory
 */
async function convertDataset() {
    console.log('🔄 Starting CSV to JSON conversion...\n');

    // Source CSV path (user's Desktop)
    const csvPath = 'c:\\Users\\VRUSHABH\\OneDrive\\Videos\\Desktop\\file for excel\\AI_Symptom_Checker_Dataset.csv';

    // Destination JSON path
    const jsonPath = path.join(__dirname, '..', 'public', 'data', 'symptom_dataset.json');

    try {
        // Read CSV file
        console.log('📖 Reading CSV file...');
        const csvContent = fs.readFileSync(csvPath, 'utf-8');

        // Parse CSV
        const lines = csvContent.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

        console.log(`✅ Found ${lines.length - 1} records\n`);
        console.log('📊 Headers:', headers.join(', '), '\n');

        // Convert to JSON
        const dataset = [];
        const stats = {
            totalRecords: 0,
            diseases: {},
            severityLevels: { Mild: 0, Moderate: 0, Severe: 0 },
            ageRange: { min: Infinity, max: -Infinity },
            confidenceRange: { min: 100, max: 0 }
        };

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];

            // Parse CSV line (handle quoted fields)
            const values = [];
            let currentValue = '';
            let insideQuotes = false;

            for (let char of line) {
                if (char === '"') {
                    insideQuotes = !insideQuotes;
                } else if (char === ',' && !insideQuotes) {
                    values.push(currentValue.trim());
                    currentValue = '';
                } else {
                    currentValue += char;
                }
            }
            values.push(currentValue.trim()); // Push last value

            if (values.length >= 7) {
                const record = {
                    patientId: parseInt(values[0]),
                    age: parseInt(values[1]),
                    gender: values[2],
                    symptoms: values[3].replace(/"/g, '').split(',').map(s => s.trim()),
                    predictedDisease: values[4],
                    severity: values[5],
                    confidenceScore: parseInt(values[6])
                };

                dataset.push(record);
                stats.totalRecords++;

                // Update statistics
                stats.diseases[record.predictedDisease] = (stats.diseases[record.predictedDisease] || 0) + 1;
                stats.severityLevels[record.severity]++;
                stats.ageRange.min = Math.min(stats.ageRange.min, record.age);
                stats.ageRange.max = Math.max(stats.ageRange.max, record.age);
                stats.confidenceRange.min = Math.min(stats.confidenceRange.min, record.confidenceScore);
                stats.confidenceRange.max = Math.max(stats.confidenceRange.max, record.confidenceScore);
            }
        }

        // Ensure directory exists
        const dataDir = path.dirname(jsonPath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Write JSON file
        fs.writeFileSync(jsonPath, JSON.stringify(dataset, null, 2));
        console.log(`✅ Successfully converted ${stats.totalRecords} records to JSON`);
        console.log(`📁 Saved to: ${jsonPath}\n`);

        // Display statistics
        console.log('📈 Dataset Statistics:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Total Records: ${stats.totalRecords}`);
        console.log(`\nDiseases:`);
        Object.entries(stats.diseases).forEach(([disease, count]) => {
            console.log(`  • ${disease}: ${count} cases`);
        });
        console.log(`\nSeverity Distribution:`);
        Object.entries(stats.severityLevels).forEach(([level, count]) => {
            console.log(`  • ${level}: ${count} cases`);
        });
        console.log(`\nAge Range: ${stats.ageRange.min} - ${stats.ageRange.max} years`);
        console.log(`Confidence Range: ${stats.confidenceRange.min}% - ${stats.confidenceRange.max}%`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        console.log('✨ Conversion complete!\n');

    } catch (error) {
        console.error('❌ Error during conversion:', error.message);
        process.exit(1);
    }
}

// Run conversion
convertDataset();
