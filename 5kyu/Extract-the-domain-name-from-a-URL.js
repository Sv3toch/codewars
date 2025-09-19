// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url){
    if(url.includes('://')){
       url= url.slice(url.indexOf('://')+3)
    }
    if(url.includes('www.')){
        url=url.replace('www.','')
    }
    return url.slice(0,url.indexOf('.'))
}


console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("http://www.zombie-bites.com"))