/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

//Submit

function getCount(str) {
    consider=['a','e','i','o','u']
    num=0
    for (i of str.split('')){
        if(consider.includes(i)){
            num++
        }
    }
    return num;
}

console.log(getCount('abracadabra'))