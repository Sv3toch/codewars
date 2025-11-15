var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    const elem = strs[0];
    let res = '';

    for (let i = 0; i < elem.length; i++) {
        const prefix = elem.slice(0, i + 1);

        if (strs.every(el => el.startsWith(prefix))) {
            res = prefix;
        } else {
            break;
        }
    }

    return res;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))