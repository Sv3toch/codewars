function sumDigPow(a, b) {
    const arr=[]
    for(let i =a;i<=b;i++){
        if([...String(i)].reduce((acc,el,index)=>acc+Number(el)**(index+1),0)===i)arr.push(i)
    }
    return arr
}


console.log(sumDigPow(1,10))
console.log(sumDigPow(1,100))
console.log(sumDigPow(90,100))
console.log(sumDigPow(50,150))