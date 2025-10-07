// Numbers ending with zeros are boring.
//
//     They might be fun in your world, but not here.
//
//     Get rid of them. Only the ending ones.
//
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.
//


function noBoringZeros(n) {
    const arr = [...String(n)]
    while (arr.at(-1) === '0') {
        arr.pop()
    }
    return Number(arr.join(''))
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(960000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))
console.log(noBoringZeros(0))
console.log(noBoringZeros(300600))