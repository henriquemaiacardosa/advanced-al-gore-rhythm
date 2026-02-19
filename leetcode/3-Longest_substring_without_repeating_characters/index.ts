function lengthOfLongestSubstring(s: string): number {
    const positions: { [key: string]: number } = {};
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c in positions && positions[c] >= start) {
            start = positions[c] + 1;
        }

        positions[c] = i

        maxLength = Math.max(maxLength, i - start + 1)
    }

    return maxLength;
};
