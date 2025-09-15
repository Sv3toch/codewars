// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
//     Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.
//
//     In Roman numerals:
//
//     1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
//     Example:
//
// 1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:
//
//     Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


function solution(number) {
    let result = ''
    if (number >= 1000) {

        result += 'M'.repeat(Math.trunc(number / 1000))
        number = number % 1000
    }
    if (number >= 900) {
        result += 'CM'
        number = number % 900
    }
    if (number >= 500) {
        result += 'D'
        number = number % 500
    }
    if (number>=400){
        result+='CD'
        number=number%400
    }
    if (number >= 100) {
        result += 'C'.repeat(Math.trunc(number / 100))
        number = number % 100
    }
    if (number>=90){
        result+='XC'
        number=number%90
    }
    if (number >= 50) {
        result += 'L'.repeat(Math.trunc(number / 50))
        number = number % 50
    }
    if(number>=40){
        result+='XL'
        number=number%40
    }
    if (number >= 10) {
        result += 'X'.repeat(Math.trunc(number / 10))
        number = number % 10
    }
    if(number>=9){
        result+='IX'
        number=number%9
    }
    if (number >= 5) {
        result += 'V'.repeat(Math.trunc(number / 5))
        number = number % 5
    }
    if (number>=4){
        result+='IV'
        number=number%4
    }
    if (number >= 1) {
        result += 'I'.repeat(Math.trunc(number))
    }

    return result
}


console.log(solution(1))
console.log(solution(5))
console.log(solution(10))
console.log(solution(1001))
console.log(solution(1990))
console.log(solution(2990))
console.log(solution(1666))