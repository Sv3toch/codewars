// Let's look on natural numbers (counting from 1 =( ) and mark each number as 1 if it is prime and 0 otherwise.
//
// 1 2 3 4 5 6 7 8 ...
//
// 0 1 1 0 1 0 1 0 ...
//
// For given number n output an integer whose bits are exactly bits of sequence above up to (including) n. Consider little-endian order.
//
//     n <= 10 000.
//
//     Example
//
// Let n be 9.
//
// 1  2  3  4  5  6  7  8  9 - naturals
//
// 0  1  1  0  1  0  1  0  0 - "prime" bits
//
// 1  2  4  8 16 32 64 128 256 - corresponding powers of two
//
// So channelling_powers(9) equals 2 + 4 + 16 + 64 = 86.


function channellingPrimes(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            sum += 2 ** (i - 1);
        }
    }

    return sum.toString()+'n';
}

function isPrime(x){
    if (x <= 1) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;

    const sqrt = Math.floor(Math.sqrt(x));
    for (let i = 3; i <= sqrt; i += 2) {
        if (x % i === 0) return false;
    }

    return true;
}

console.log(channellingPrimes(2))
console.log(channellingPrimes(3))
console.log(channellingPrimes(7))
console.log(channellingPrimes(21))
