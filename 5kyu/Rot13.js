// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
const run=(ind)=>{
    if(ind+13>25)return ind-13
    return ind+13
}

function rot13(message){
    const lower = [..."abcdefghijklmnopqrstuvwxyz"];
    const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
   return [...message].map(el=>{
        if(lower.includes(el)){
            return lower[run(lower.indexOf(el))]}
        if(upper.includes(el)){
            return upper[run(upper.indexOf(el))]}
        return el
    }).join('')
}


console.log(rot13('NNNNNnnn'))
console.log(rot13('Test'))
console.log(rot13('abcdefghijklmnopqrstuvwxyz'))
console.log(rot13('0FN]!-2'))