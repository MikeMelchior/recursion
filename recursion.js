// const fibs = (n) => {
//     if (n == 1) return [0]
//     if (n == 2) return [0, 1]
//     let arr = [0, 1];
//     let prev = 0;
//     let curr = 1;
//     let result = prev + curr;
//     for (let i = 2; i < n; i++) {
//         arr.push(result);
//         prev = curr;
//         curr = result;
//         result = prev + curr;
//     }
//     return arr
// }


// let fibsRec = (n) => {
//     if (n < 0) {
//         'Please enter a valid number'
//     } else if ( n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1]
//     } else {
//         return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
//     }
// }

// console.log(fibsRec(4))  .... [0, 1, 1, 2]
