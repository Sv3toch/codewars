// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//
//     Examples:
//
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
//     Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.




function roundToNext5(n){
    return n<=0?n-(n%5):n%5===0?n:n+5-n%5
}


console.log(roundToNext5(0))
console.log(roundToNext5(1))
console.log(roundToNext5(5))
console.log(roundToNext5(6))
console.log(roundToNext5(-1))
console.log(roundToNext5(-8))
console.log(roundToNext5(-11))
console.log(roundToNext5(-5))