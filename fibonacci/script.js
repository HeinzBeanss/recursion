function fibs(n) {
    let a = 0;
    let b = 1;
    let c = 1;
    answer = [a];

    for (let i = 1; i < n ; i++) {
        answer.push(c);
        c = a + b;
        a = b;
        b = c;
    }
    console.log(answer);
}

fibs(10);
// fibs(1); // doesn't work but that's okay.
fibs(2);
fibs(1);// 5 - 2 = 3  a (0), b (1), c = a + b,
                                //  b = c, a = b
                                        // c = a + b

let a = 0;
let b = 1;
let c = 1;
answerRec = [0];

function fibsRec(n) {


    if (n == answerRec.length) {
    return console.log(answerRec);
    } else {
        answerRec.push(c);
        c = a + b;
        a = b;
        b = c;
        fibsRec(n);
    }
    
}

// fibsRec(2);