//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Submit

function evenOrOdd(number) {
    if (number%2===0){
        return "Even"
    }
    else {
        return "Odd"
    }
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(1))