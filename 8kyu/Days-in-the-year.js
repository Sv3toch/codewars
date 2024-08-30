/*
A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

Input: year = 2000 ==> returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
 */

/*
//Test:
    assert.strictEqual(yearDays(0), '0 has 366 days');
    assert.strictEqual(yearDays(-64), '-64 has 366 days');
    assert.strictEqual(yearDays(2016), '2016 has 366 days');
    assert.strictEqual(yearDays(1974), '1974 has 365 days');
    assert.strictEqual(yearDays(-10), '-10 has 365 days');
    assert.strictEqual(yearDays(666), '666 has 365 days');
    assert.strictEqual(yearDays(1857), '1857 has 365 days')

 */

//Solution:

function yearDays(year) {
    let a
    if ( year%4!==0){
        a= '365'
    }
    else if ( year%100!==0){
        a = '366'
    }
    else if ( year%400===0){
        a = '366'
    }
    else{
        a= '365'
    }

    return String(year)+' has '+a+' days'
}

console.log(yearDays(-10))