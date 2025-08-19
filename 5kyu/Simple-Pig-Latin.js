// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    const punktuationArr = ['',".", ",", "!", "?", ":", ";", "-", "—", "(", ")", "[", "]", "{", "}", "\"", "'", "«", "»", "…", "/", "\\", "@", "#", "&", "*", "%", "$", "^", "=", "+", "<", ">", "|", "~"]
    return str.split(' ').map((n)=>{
        return punktuationArr.includes(n)? n:
            `${[...[...n].slice(1),[...n][0]].join('')}ay`
    }).join(' ')
}


console.log(pigIt('Pig latin is cool /'))
console.log(pigIt('  Pig latin is cool /'))
console.log(pigIt('This is my string'))