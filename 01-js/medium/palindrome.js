function isPalindrome(str) {
    // Step 1: Lowercase + remove non-letters/numbers
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Step 2: Reverse
    const reversed = cleaned.split('').reverse().join('');

    // Step 3: Compare
    return cleaned === reversed;
}

module.exports = isPalindrome;

