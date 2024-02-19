import maxArea from './11_container_with_most_water.js';

describe('validates maxArea', () => {
    test.each([
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { input: [1, 1], expected: 1 },
        { input: [1, 2, 90, 99, 2, 1], expected: 90 },
    ])('maxArea($input) should be $expected', ({ input, expected }) => {
        expect(maxArea(input)).toBe(expected);
    });
});
