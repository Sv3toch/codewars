// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// function toCamelCase(str){
//     str =str.split(/[-_]+/)
// return `${str[0]}${str.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join('')}`
// }



function toCamelCase(str){
str= str.replaceAll('-','_')
 return    str.split('_').map((el,index)=>index!==0?el.slice(0,1).toUpperCase()+el.slice(1,):el).join('')
}

console.log(toCamelCase("the--__-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))