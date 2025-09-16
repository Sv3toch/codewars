// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"



String.prototype.toAlternatingCase = function () {
    return [...this].map(el=>el===el.toLowerCase()?el.toUpperCase():el.toLowerCase()).join('')
}


console.log("hello world".toAlternatingCase())
console.log("hello WORLD".toAlternatingCase())
console.log("1a2b3c4d5e".toAlternatingCase())