const fibs = (n) => {
    if (n == 1) return [0]
    if (n == 2) return [0, 1]
    let arr = [0, 1];
    let prev = 0;
    let curr = 1;
    let result = prev + curr;
    for (let i = 2; i < n; i++) {
        arr.push(result);
        prev = curr;
        curr = result;
        result = prev + curr;
    }
    return arr
}


// iterative version
//
// fibs(4) ...//... [0, 1, 1, 2];
// fibs(5) ...//... [0, 1, 1, 2, 3];
// fibs(10) ...//... [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];



let fibsRec = (n) => {
    if (n < 0) {
        'Please enter a valid number'
    } else if ( n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1]
    } else {
        return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
    }
}

// recursive 
//
// fibsRec(4)  ...//... [0, 1, 1, 2];
// fibsRec(6)  ...//... [0, 1, 1, 2, 3, 5];
// fibsRec(10) ...//... [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]