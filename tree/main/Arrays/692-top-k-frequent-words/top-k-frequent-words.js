/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
    const freq = new Map();

    // 1. Count frequency of each word
    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    // 2. Convert Map to array
    const arr = [...freq.entries()];

    // 3. Sort by frequency, then lexicographical order
    arr.sort((a, b) => {
        // Higher frequency first
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }

        // Same frequency → alphabetical order
        return a[0].localeCompare(b[0]);
    });

    // 4. Take first k words
    return arr.slice(0, k).map(([word]) => word);
}