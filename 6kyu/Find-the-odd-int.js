// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//
// function findOdd(A) {
//     if (A.length === 1) {
//         return A[0]
//     }
//     console.log(A.join(""))
//     return A.filter(n=>(A.join('').length-A.join('').replaceAll(n,'').length)%2 ===1)
//
// } //не работает для отрицательных чисел


function findOdd(A) {
    A=A.sort()

    return A.filter(n=>(A.lastIndexOf(n)-A.indexOf(n))%2===0)[0]
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([1, 1, 2,2,2]))
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
console.log(findOdd([1]))



