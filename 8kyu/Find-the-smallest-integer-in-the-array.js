/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */
//Submit


function findSmallestInt(arr) {
    let min = arr[0]
    for(let i =0; i<arr.length+1; i++){
        if (arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}

console.log(findSmallestInt([78,56,232,12,18]))