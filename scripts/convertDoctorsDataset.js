import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Convert Doctors CSV to JSON for the Find Doctors feature
 */

async function convertDoctorsDataset() {
    console.log('🔄 Starting Doctors CSV to JSON conversion...\n');

    const csvPath = 'c:\\Users\\VRUSHABH\\OneDrive\\Videos\\Desktop\\file for excel\\sample-data-Doctors.csv';
    const jsonPath = path.join(__dirname, '..', 'public', 'data', 'doctors_dataset.json');

    try {
        console.log('📖 Reading CSV file...');
        const csvContent = fs.readFileSync(csvPath, 'utf-8');

        const lines = csvContent.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

        console.log(`✅ Found ${lines.length - 1} doctor records\n`);

        const doctors = [];
        const stats = {
            totalDoctors: 0,
            specialties: {},
            avgRating: 0,
            totalRatings: 0,
            withSocialMedia: 0
        };

        // Helper function to parse CSV line with quoted fields
        function parseCSVLine(line) {
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
            values.push(currentValue.trim());
            return values;
        }

        // Helper to extract primary specialty
        function extractPrimarySpecialty(categoryName) {
            if (!categoryName) return 'General Physician';
            const specialties = categoryName.split(',').map(s => s.trim());
            // Prioritize medical specialties over generic "Doctors"
            const priority = specialties.find(s => s !== 'Doctors' && s !== 'Hospitals');
            return priority || specialties[0] || 'General Physician';
        }

        // Helper to detect gender from name (basic heuristic)
        function detectGender(name) {
            const femaleTitles = ['Dr. Priya', 'Dr. Anjali', 'Dr. Swapna'];
            return femaleTitles.some(title => name.includes(title.split(' ')[1]));
        }

        // Helper to generate avatar URL
        function generateAvatar(name) {
            const cleanName = name.replace('Dr. ', '').replace(/[^a-zA-Z\s]/g, '');
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=random&color=fff&size=200`;
        }

        // Helper to calculate mock distance (random for now)
        function calculateDistance() {
            return parseFloat((Math.random() * 15 + 0.5).toFixed(1));
        }

        // Process each doctor record
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            if (!line.trim()) continue;

            const values = parseCSVLine(line);

            if (values.length >= 7) {
                const doctor = {
                    id: `doc-${i}`,
                    name: values[0].replace(/"/g, ''),
                    address: values[1].replace(/"/g, ''),
                    phone: values[2].replace(/"/g, ''),
                    email: values[3].replace(/"/g, ''),
                    location: {
                        lat: parseFloat(values[4]) || 0,
                        lng: parseFloat(values[5]) || 0,
                        city: values[9] || 'Nagpur',
                        state: values[8] || 'Maharashtra',
                        zip: values[12] || ''
                    },
                    website: values[6].replace(/"/g, ''),
                    rating: parseFloat(values[10]) || 4.5,
                    ratingCount: parseInt(values[11]) || 0,
                    specialty: extractPrimarySpecialty(values[14]),
                    allSpecialties: values[14] ? values[14].split(',').map(s => s.trim()).filter(s => s !== 'Doctors') : [],
                    qualification: 'Verified Practice',
                    distance: calculateDistance(),
                    languages: ['Marathi', 'Hindi', 'English'], // Default for Nagpur
                    image: generateAvatar(values[0]),
                    isFemale: detectGender(values[0]),
                    socialMedia: {
                        facebook: values[15] ? values[15].replace(/"/g, '') : null,
                        instagram: values[16] ? values[16].replace(/"/g, '') : null,
                        linkedin: values[17] ? values[17].replace(/"/g, '') : null,
                        twitter: values[18] ? values[18].replace(/"/g, '') : null,
                        whatsapp: values[19] ? values[19].replace(/"/g, '') : null,
                        youtube: values[20] ? values[20].replace(/"/g, '') : null
                    }
                };

                doctors.push(doctor);
                stats.totalDoctors++;

                // Update stats
                stats.specialties[doctor.specialty] = (stats.specialties[doctor.specialty] || 0) + 1;
                stats.totalRatings += doctor.rating;

                const hasSocial = Object.values(doctor.socialMedia).some(v => v && v !== '');
                if (hasSocial) stats.withSocialMedia++;
            }
        }

        stats.avgRating = (stats.totalRatings / stats.totalDoctors).toFixed(1);

        // Ensure directory exists
        const dataDir = path.dirname(jsonPath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Save to JSON
        fs.writeFileSync(jsonPath, JSON.stringify(doctors, null, 2));
        console.log(`✅ Successfully converted ${stats.totalDoctors} doctors to JSON`);
        console.log(`📁 Saved to: ${jsonPath}\n`);

        // Display statistics
        console.log('📈 Dataset Statistics:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Total Doctors: ${stats.totalDoctors}`);
        console.log(`Average Rating: ${stats.avgRating} ⭐`);
        console.log(`Doctors with Social Media: ${stats.withSocialMedia}`);
        console.log(`\nSpecialties:`);
        Object.entries(stats.specialties).forEach(([specialty, count]) => {
            console.log(`  • ${specialty}: ${count} doctor(s)`);
        });
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        console.log('✨ Conversion complete!\n');

    } catch (error) {
        console.error('❌ Error during conversion:', error.message);
        process.exit(1);
    }
}

convertDoctorsDataset();
