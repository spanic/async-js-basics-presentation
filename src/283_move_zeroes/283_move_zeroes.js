// shouldn't return anything, source array will be modified in-place

var moveZeroes = function (nums) {
    let i = 0,
        j = 0;

    while (i < nums.length && j < nums.length) {
        if (nums[i] === 0) {
            i++;
            continue;
        }

        if (i !== j) {
            nums[j] = nums[i];
        }

        i++;
        j++;
    }

    for (let k = j; k < i; k++) {
        nums[k] = 0;
    }
};

export default moveZeroes;
