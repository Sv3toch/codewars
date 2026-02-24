// function findEvenIndex(arr) {
//     for (let i =0;i<arr.length;i++){
//     if(arr.slice(0,i).reduce((acc,el)=>acc+el,0)===arr.slice(i+1,arr.length).reduce((acc,el)=>acc+el,0)){
//         return i}}
//     return -1;
// }
//
//
// console.log(findEvenIndex([1,2,3,4,3,2,1]))
// console.log(findEvenIndex([1,100,50,-51,1,1]))
// console.log(findEvenIndex([1,2,3,4,5,6]))
// console.log(findEvenIndex([20,10,-80,10,10,15,35]))


////////////////////////////////////////////

// function isValidWalk(walk) {
//     if(walk.length!==10) return false
//     const walkMap={
//         'n':0,
//         's':0,
//         'w':0,
//         'e':0
//     }
//     walk.forEach(n=>{
//         walkMap[n]+=1
//     })
//     return !(walkMap.n-walkMap.s)&&!(walkMap.w-walkMap.e)
// }
//
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
// console.log(isValidWalk(['w']))


/////////////////////////////////////////////////////


// function sum(a,b){
//     return a+b
// }
//
// function sum1(a){
//      function ar (b){
//         return function (c){
//             return a+b+c
//         }
//     }
//     return ar
// }
//
// const arraaaa=sum1(1)
//
// console.log(sum(1,2))
// console.log(sum1(1)(2)(10))
//

// на пежо 405 1ю9 дизель водяной насос


const sum = (nums, target) => {
    for (let numIndex = 0; numIndex < nums.length; numIndex++) {
        const lastIndex = nums.indexOf(target - nums[numIndex], numIndex+1)
        if (lastIndex != -1 && lastIndex != numIndex) return [numIndex, lastIndex]
    }
}

console.log(sum([2, 7, 11, 15], 9))
console.log(sum([3, 3], 6))
console.log(sum([3, 2, 4], 6))
console.log(sum([2, 1, 5, 3, 3], 6))