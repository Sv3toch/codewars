var isPalindrome = function(x) {
    return x===Number([...x.toString()].reverse().join(''))
};


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))