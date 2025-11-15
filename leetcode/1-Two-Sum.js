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