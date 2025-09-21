// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
    const num =    strng.match(/\d+/)
    return num?strng.slice(0,strng.lastIndexOf(num[0]))+String((Number(num[0])+1)).padStart(num[0].length,'0')  :`${strng}1`
}


console.log(incrementString("foobar000"))
console.log(incrementString("foobar999"))
console.log(incrementString("foobar00999"))
console.log(incrementString("foo"))
console.log(incrementString("1"))
console.log(incrementString("fo99obar99"))