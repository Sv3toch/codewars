// Create a parser to interpret and execute the Deadfish language.
//
//     Deadfish operates on a single value in memory, which is initially set to 0.
//
// It uses four single-character commands:
//
//     i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.
//
//     Examples
// Program "iiisdoso" should return numbers [8, 64].
//     Program "iiisdosodddddiso" should return numbers [8, 64, 3600].


function parse(data) {
    let res = 0
    const arr = []
    for (const x of [...data]) {
        switch (x) {
            case 'i':
                res++
                break;
            case 'd':
                res--
                break;
            case 's':
                res *= res
                break;
            case 'o':
                arr.push(res)
        }
    }
    return arr
}


console.log(parse('iiisxxxdoso'))