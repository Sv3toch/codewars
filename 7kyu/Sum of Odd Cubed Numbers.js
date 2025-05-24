//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


const sumCube =(mass)=>{
    let index
    let numSum=0
    for (index=0; index<mass.length; index++){
        if (typeof mass[index] != "number"){
            return undefined
        }else {
            const numberCub = Math.pow(mass[index], 3)
            console.log(numberCub)
            if((Math.abs(numberCub))%2 === 1){
                numSum+=numberCub
            }
        }
    }
    return numSum

}



mas =[1,2,3,4]
console.log(sumCube(mas))