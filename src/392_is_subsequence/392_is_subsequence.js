const isSubsequence = function (s, t) {
    if (!s.length) return true;

    let i = 0,
        j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] !== t[j]) {
            j++;
            continue;
        }
        i++;
        j++;
    }

    return s[i - 1] === t[j - 1] && i === s.length;
};

export default isSubsequence;
