// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false.
//
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6) &&
        [...pin].every(n => n >= '0' && n <= '9');
}


console.log(validatePIN("-134"))
console.log(validatePIN("1,23,4"))
console.log(validatePIN("12345"))
console.log(validatePIN("a12345"))
console.log(validatePIN("1234"))
console.log(validatePIN("'123"))