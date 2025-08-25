// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]


function towerBuilder(nFloors) {
    const arr = []
    const width = 2 * nFloors - 1

    for (let i = 0; i < nFloors; i++) {
        const stars = '*'.repeat(2 * i + 1)
        const space = ' '.repeat((width - stars.length) / 2)
        arr.push(space + stars + space)
    }
    return arr
}


console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))
console.log(towerBuilder(10))