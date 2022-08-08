"use strict"
// 1
function sumTwoSmallestNumbers (...args){
    if (args.length < 2)
    {console.error(`Error`)
    } else {
        let sorted = args.sort((a, b) => a - b);
        return sorted[0] + sorted[1];
    }
}
console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1));  // undefined и отдельный console.error("...")

// 2
// function createCalculator(x){
//     let initial = x;
//     return {
//         'sum': (y) => initial += y, 
//         'mult': (y) => initial *= y,
//         'sub': (y) => initial -= y,    
//         'div': (y) => initial /= y,
//     }
// }
// const calc = createCalculator(10);

// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11