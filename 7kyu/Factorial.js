// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.


function factorial(n)
{
    if(n<0 || n>12){
throw new RangeError("Input must be between 0 and 12")
    }
    let fac=1
    for (let i=1; i<=n; i++){
        fac*=i
    }
    return fac
    // Calculate the factorial here
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(-1))