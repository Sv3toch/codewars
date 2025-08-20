// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const arrOdd=Object.entries({...array}).filter(n=>Math.abs(n[1])%2===1)
    const indexOdd=arrOdd.map(n=>n[0])
    const sortedOdd= arrOdd.map(n=>n[1]).sort((a,b)=>a-b)
    const sortObject= indexOdd.reduce((acc,index,i)=>{
        acc[index]=sortedOdd[i]
        return acc},{}
    )
    for (const key in sortObject){
        array[Number(key)]=sortObject[key]
    }
    return array
}


console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))