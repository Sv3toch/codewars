// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.
//
//     Rules
// 1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
//
// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
// Good luck and enjoy!



// function wave(str){
//    const result=[]
//     for (let i =0;i<str.length; i++){
//         if(str[i]!==' '){
//         result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))
//     }}
//     return result
// }



// function wave(str){
// return [...str].reduce((acc,el,i)=>{
//     if (el!==' '){
//         return [...acc,(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))]
//     }return acc
// },[])}




console.log(wave("hello"))
console.log(wave(" gap "))
console.log(wave("Two words"))
console.log(wave("codewars"))