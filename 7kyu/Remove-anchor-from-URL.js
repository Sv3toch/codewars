// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
//     Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"



function removeUrlAnchor(url){
    const index=url.indexOf('#')
    return index!==(-1)?url.slice(0,index):url
}


console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))