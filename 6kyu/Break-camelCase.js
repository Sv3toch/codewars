// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    return [...string].map(n=>{
        if (64<n.codePointAt(0) && n.codePointAt(0)<91){
            return ` ${n}`
        }
        return n
    }).join('')
}


console.log( solution(''))
console.log( solution("camelCasing"))
console.log( solution("camelCasingTest"))