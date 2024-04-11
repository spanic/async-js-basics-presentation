const deckRevealedIncreasing = require('./950_reveal_cards_in_increasing_order.js');

describe('validates deckRevealedIncreasing', () => {
    test.each([
        { input: [17, 13, 11, 2, 3, 5, 7], expected: [2, 13, 3, 11, 5, 17, 7] },
        { input: [1, 1000], expected: [1, 1000] },
    ])(
        'deckRevealedIncreasing($input) should be $expected',
        ({ input, expected }) => {
            expect(deckRevealedIncreasing(input)).toStrictEqual(expected);
        }
    );
});
