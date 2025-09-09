// Given a number n, find the number of trailing zeros in its binary representation.
//
//     Examples:
// 4  ->  2, because 4 is represented as 100
// 5  ->  0, because 5 is represented as 101


function trailingZeros(n) {
    const bin =n.toString(2)
    let zeroNum=0
    for(let i =bin.length-1;i>0;i--){
        if(bin[i]==='0')zeroNum++
        else{return zeroNum}
    }
return zeroNum
}

console.log(trailingZeros(4))
console.log(trailingZeros(5))
console.log(trailingZeros(32))
console.log(trailingZeros(25))