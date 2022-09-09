function solution(st) {
    let palindrome = st;
    let i = 0;
    while (palindrome !== palindrome.split('').reverse().join('')) {
        palindrome = st + st.slice(0, i).split('').reverse().join('');
        i++;
    }
    return palindrome;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test buildPalindrome

// alternative solution
