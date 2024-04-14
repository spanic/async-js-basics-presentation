const maxOperations = function (nums, k) {
    let result = 0;

    const numsQtyMap = nums.reduce((acc, current) => {
        acc.set(current, (acc.get(current) ?? 0) + 1);
        return acc;
    }, new Map());

    [...numsQtyMap.keys()].forEach((num) => {
        if (!numsQtyMap.has(num)) {
            return;
        }

        if (num >= k) {
            return;
        }

        if (num == k / 2) {
            const pairsCount = Math.floor(numsQtyMap.get(num) / 2);
            result += pairsCount;

            numsQtyMap.delete(num);
        } else {
            const firstPairElCount = numsQtyMap.get(num);
            const secondPairElCount = numsQtyMap.get(k - num) ?? 0;
            const pairsCount = Math.min(firstPairElCount, secondPairElCount);
            result += pairsCount;

            numsQtyMap.delete(num);
            numsQtyMap.delete(k - num);
        }
    });

    return result;
};

export default maxOperations;
