// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//
//     Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


// function getSum(a, b) {
//     const arr = [a, b].sort((a, b) => a - b)
//     const newArr = []
//
//     for (let i = arr[0]; i !== arr[1] + 1; i++) {
//         newArr.push(i)
//     }
//     return newArr.reduce((acc, n) => acc + n, 0)
// }
//

function getSum(a,b){
    const arr = [a, b].sort((a, b) => a - b)
    return (arr[1]-arr[0]+1)*(arr[0]+arr[1])/2
}


console.log(getSum(-1, 0))
console.log(getSum(1, 1))
console.log(getSum(5, 1))