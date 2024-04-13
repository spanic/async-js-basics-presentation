const removeKdigits = function (num, k) {
    const temp = [];

    if (k == num.length) {
        return '0';
    }

    for (let i = 0; i < num.length; i++) {
        const currentValue = num.charAt(i);

        while (
            temp.length > 0 &&
            k > 0 &&
            +temp[temp.length - 1] > +currentValue
        ) {
            temp.pop();
            k--;
        }

        temp.push(currentValue);
    }

    for (let i = 0; i < k; i++) {
        temp.pop();
    }

    const result = temp.join('').replace(/^0+/, '');
    return result.length == 0 ? '0' : result;
};

export default removeKdigits;
