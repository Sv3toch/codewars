function findNb(m) {
    let sum =0
    for (let i=1;sum<=m;i++){
        sum+=i**3
        if (sum===m){return i}
    }
    return (-1);
}


console.log(findNb(4183059834009))
console.log(findNb(24723578342962))
console.log(findNb(135440716410000))
console.log(findNb(40539911473216))



//1**3
//2**3
//3**3