/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

//Submit

function longest(s1, s2) {
    let arr=[]
    let arr2 =(s1+s2).split('')
    for(i of (arr2) ){
        if (arr.includes(i) === false){
            arr.push(i)
        }
    }

    return arr.sort().join('')
}

console.log(longest('asads', 'dasdadmkjn'))