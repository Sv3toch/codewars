// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
str = str.split('')
    const newArr=[]
    if (str.length%2===1){
        str.push('_')
    }
for (let i =0;i<str.length;i=i+2){
    newArr.push(str[i]+str[i+1])
}
    return newArr
}


console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(''))