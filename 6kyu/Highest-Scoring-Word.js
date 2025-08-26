// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

const code=(a)=>{
    return a.codePointAt(0)-96
}

function high(x){

    const arrNum = x.split(' ').map((n)=>([...n].reduce((acc,el)=>code(el)+acc,0)))
    const maxEl=Math.max(...arrNum)
    const indexHigh = arrNum.indexOf(maxEl)
    return x.split(' ')[indexHigh]

}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))
console.log(high('take me to semynak'))
console.log(high('aa b'))
console.log(high('aaa b'))
console.log(high('d bb'))