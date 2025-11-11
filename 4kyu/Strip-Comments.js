// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
//     Example:
//
// Given an input string of:
//
//     apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
//     apples, pears
// grapes
// bananas
//





function solution(text, markers) {
    const textArr=text.split('\n')
    const resArr=textArr.map((el)=>{
        let newEl=el.trimEnd()
        for (const value of markers){
            if (el.indexOf(value)!==-1){
            newEl=newEl.slice(0,el.indexOf(value)).trimEnd()}
        }
        return newEl})
    return resArr.join('\n')
}


console.log(solution('aa bb cc', []))
console.log(solution('aa bb\n#cc dd', ['#']))
console.log(solution( 'aa bb\ncc ! dd', ['#', '!']))
console.log(solution(  "  aa # bb # cc  ", []))