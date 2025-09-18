// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
//     If you can, try writing it in one line of code.
//



function findDifference(a, b) {
    const cub= a.reduce((acc,el,index)=>{
        return [acc[0]*el,acc[1]*b[index]]
    },[1,1])
    return Math.abs(cub[0]-cub[1])
}


console.log(findDifference([3, 2, 5], [1, 4, 4]))
console.log(findDifference([9, 7, 2], [5, 2, 2]))
console.log(findDifference([11, 2, 5], [1, 10, 8]))
console.log(findDifference([15, 20, 25], [10, 30, 25]))