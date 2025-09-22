// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//     Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


// function scramble(str1, str2) {
//     const str2Key= [...str2].reduce((acc,el)=>acc[el]?{...acc,[el]:acc[el]+=1}:{...acc,[el]:acc[el]=1},{})
//     const str1Key= [...str1].reduce((acc,el)=>acc[el]?{...acc,[el]:acc[el]+=1}:{...acc,[el]:acc[el]=1},{})
//     for (const el of Object.keys(str2Key)){
//        if (!str1Key[el] || str1Key[el]-str2Key[el]<0 )return false
//     }
//     return true
// }


// function scramble(str1, str2) {
//     const str1Key= [...str1].reduce((acc,el)=>acc[el]?{...acc,[el]:acc[el]+=1}:{...acc,[el]:acc[el]=1},{})
//     const str2Key= [...str2].reduce((acc,el)=>acc[el]?{...acc,[el]:acc[el]-=1}:false,str1Key)
//     return !!str2Key
// }

// function scramble(str1, str2) {
// for (const el of [...str2]){
//     if(str1.includes(el)){str1=str1.replace(el,'')}
//     else{
//         return false
//     }}
// return true
// }


function scramble(str1, str2) {
    const str1Key= [...str1].reduce((acc,el)=>{
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    },{})
    for (const el of [...str2]){
        if(str1Key[el]){
            str1Key[el]--}else{ return false}
    }
    return true}

console.log(scramble('rkqodlw',           'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('scriptingjava',     'javascript'))
console.log(scramble('scriptsjava',       'javascripts'))
console.log(scramble('katas',             'steak'))
console.log(scramble('scriptjavx',        'javascript'))
console.log(scramble('javscripts',        'javascript'))
console.log(scramble('jscripts',          'javascript'))
