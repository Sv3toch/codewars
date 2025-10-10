//
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//
//     Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
//
//     Examples
// A size 3 diamond:
//
//     *
// ***
// *
// ...which would appear as a string of " *\n***\n *\n"
//
// A size 5 diamond:
//
//     *
// ***
// *****
// ***
// *
// ...that is:
//
//     "  *\n ***\n*****\n ***\n  *\n"


function diamond(n) {
    if (n % 2 === 0 || n < 1) return null
    const result = []
    let len = Math.ceil(n / 2)
    for (let i = 1; i <= n; i += 2) {
        result.push(`${'*'.repeat(i).padStart(len, ' ')}\n`)
        len += 1
    }
    const arr = [...result, ...result.reverse().slice(1)]
    return arr.join('');
}


console.log(diamond(1))
console.log(diamond(3))
console.log(diamond(5))
console.log(diamond(2))
console.log(diamond(0))
console.log(diamond(-3))