const deckRevealedIncreasing = function (deck) {
    const result = [];

    const sortedDeck = deck.toSorted((a, b) => a - b);
    const indices = [...sortedDeck.keys()];

    for (let i = 0; i < sortedDeck.length; i++) {
        const currentIndexForResult = indices.shift();
        const valueForResult = sortedDeck[i];

        result[currentIndexForResult] = valueForResult;

        indices.push(indices.shift());
    }

    return result;
};

module.exports = deckRevealedIncreasing;
