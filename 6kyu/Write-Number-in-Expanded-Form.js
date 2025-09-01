// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!



function expandedForm(num) {
    const stringNum= num.toString()
    const sum=[]
for (let i =0;i<stringNum.length;i++){
    if (stringNum[i]!=='0'){
        sum.push(Number(stringNum[i])*(10**(stringNum.length-i-1)))
    }
   }
return sum.join( ' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))