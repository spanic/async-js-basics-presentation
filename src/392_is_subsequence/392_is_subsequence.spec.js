import isSubsequence from './392_is_subsequence.js';

describe('validates isSubsequence', () => {
    test.each([
        { s: 'abc', t: 'ahbgdc', expected: true },
        { s: 'axc', t: 'ahbgdc', expected: false },
        { s: 'ax', t: 'ax', expected: true },
        { s: '', t: '', expected: true },
        { s: 'mc', t: 'ax', expected: false },
        { s: '', t: 'ahbgdc', expected: true },
        { s: 'b', t: 'abc', expected: true },
    ])('isSubsequence($s, $t) should be $expected', ({ s, t, expected }) => {
        expect(isSubsequence(s, t)).toBe(expected);
    });
});
