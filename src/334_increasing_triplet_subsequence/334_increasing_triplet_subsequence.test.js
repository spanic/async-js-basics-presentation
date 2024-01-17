import increasingTriplet from './334_increasing_triplet_subsequence';

describe('finds increasing triplet in source array', () => {
    test.each([
        { input: [1, 2, 3, 4], expected: true },
        { input: [5, 4, 3, 2, 1], expected: false },
        { input: [2, 1, 5, 0, 4, 6], expected: true },
        { input: [20, 100, 10, 12, 5, 13], expected: true },
        { input: [1, 5, 0, 4, 1, 3], expected: true },
        { input: [1], expected: false },
        { input: [0, 4, 2, 1, 0, -1, -3], expected: false },
    ])('$input ➡️ $expected', ({ input, expected }) => {
        expect(increasingTriplet(input)).toBe(expected);
    });
});
