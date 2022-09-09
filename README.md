# buildPalindrome

Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

A string that doesn't changed when reversed (it reads the same backward and forward).

Examples:

- `"eye"` is a palindrome
- `"noon"` is a palindrome
- `"decaf faced"` is a palindrome
- `"taco cat"` is **not** a palindrome (backwards it spells `"tac ocat"`)
- `"racecars"` is **not** a palindrome (backwards it spells `"sracecar"`)

## Example

For `st = "abcdc"`, the output should be
`solution(st) = "abcdcba"`.

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
`3 ≤ st.length ≤ 10`.

- [output] string
