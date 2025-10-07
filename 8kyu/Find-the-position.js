// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Output :: "Position of alphabet: 1"
//
// Note: Only lowercased English letters are tested



function position(letter){
    const poz=letter.codePointAt(0)
    return `Position of alphabet: ${poz-96}`
}


console.log(position('a'))
console.log(position('z'))
console.log(position('e'))