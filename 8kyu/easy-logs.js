// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X:
// log⁡𝑋𝐴+log⁡𝑋𝐵log X​ A+log X​ B.

//Test:
// logs(10, 2, 3), 0.7781512503836435;
// logs(5, 2, 3), 1.1132827525593785;
// logs(1000, 2, 3), 0.25938375012788123


//Solution:

function logs(x , a, b){
    return (Math.log(a) / Math.log(x))+( Math.log(b) / Math.log(x))
}


console.log(logs(10, 2, 3))