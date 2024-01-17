const increasingTriplet = function (nums) {
    let first = Infinity,
        second = Infinity;

    for (let current of nums) {
        if (current < first) {
            first = current;
        } else if (current < second) {
            second = current;
        } else {
            return true;
        }
    }

    return false;
};

export default increasingTriplet;
