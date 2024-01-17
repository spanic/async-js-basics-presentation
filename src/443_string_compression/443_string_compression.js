const compress = function (chars) {
    let previous, prevIdx;

    for (let i = 0; i <= chars.length; i++) {
        const current = chars[i];

        if (i === 0) {
            previous = current;
            prevIdx = 0;
            continue;
        }

        if (current === previous && i < chars.length) continue;

        const groupLength = i - prevIdx;
        const add = previous + (groupLength > 1 ? groupLength.toString() : '');

        chars.splice(prevIdx, groupLength, ...add.split(''));

        previous = current;
        prevIdx = i = chars.indexOf(current, prevIdx + add.length);

        if (i === -1) break;
    }

    // console.log(chars);

    return chars.length;
};

export default compress;
