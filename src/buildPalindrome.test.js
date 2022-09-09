const solution = require('./buildPalindrome.js');

test('test 1', () => {
    expect(solution("abcdc")).toBe("abcdcba");
});

test('test 2', () => {
    expect(solution("ababab")).toBe("abababa");
});

test('test 3', () => {
    expect(solution("abba")).toBe("abba");
});

test('test 4', () => {
    expect(solution("abaa")).toBe("abaaba");
});

test('test 5', () => {
    expect(solution("aaaaba")).toBe("aaaabaaaa");
});

test('test 6', () => {
    expect(solution("abc")).toBe("abcba");
});

test('test 7', () => {
    expect(solution("kebab")).toBe("kebabek");
});

test('test 8', () => {
    expect(solution("abccba")).toBe("abccba");
});

test('test 9', () => {
    expect(solution("abcabc")).toBe("abcabcbacba");
});

test('test 10', () => {
    expect(solution("cbdbedffcg")).toBe("cbdbedffcgcffdebdbc");
});

test('test 11', () => {
    expect(solution("euotmn")).toBe("euotmnmtoue");
});
