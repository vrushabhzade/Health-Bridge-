/**
 * Data loading utility for symptom dataset
 */

let cachedDataset = null;

/**
 * Load symptom dataset from JSON file
 */
export const loadSymptomDataset = async () => {
    // Return cached data if available
    if (cachedDataset) {
        return cachedDataset;
    }

    try {
        const response = await fetch('/data/symptom_dataset.json');
        if (!response.ok) {
            throw new Error('Failed to load symptom dataset');
        }

        const data = await response.json();
        cachedDataset = data;
        return data;
    } catch (error) {
        console.error('Error loading symptom dataset:', error);
        return [];
    }
};

/**
 * Clear cached dataset (useful for testing)
 */
export const clearDatasetCache = () => {
    cachedDataset = null;
};
