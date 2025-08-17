// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]


function digitize(n) {
    return [...n.toString()].map(n=>Number(n)).reverse()}


console.log(digitize(0))
console.log(digitize(35231))