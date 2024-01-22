import moveZeroes from './283_move_zeroes';

describe('moving zeroes in-place to the end of the source array', () => {
    test.each([
        { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
        { input: [99, -11, 3, 0, 12, 0], expected: [99, -11, 3, 12, 0, 0] },
        { input: [0], expected: [0] },
    ])('$input ➡️ $expected', ({ input, expected }) => {
        moveZeroes(input);
        expect(input).toMatchObject(expected);
    });
});
