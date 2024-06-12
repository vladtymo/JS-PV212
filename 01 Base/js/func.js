// ------------- functions -------------
// 1 - function declaration
function getSumm(a, b) {
    return a + b;
}

const res1 = getSumm(20, 5);

// 2 - function expression
const getMult = function (a, b) {
    if (a === 0 || b === 0) console.warn("When one of the operands is 0 the result always be 0!");

    return a * b;
}

const res2 = getMult(10, 0);

// 3 - arrow function
const getDiv = (a, b) => {
    if (b === 0) console.warn("Can not divide by 0!");

    return a / b;
}
const getDivShort = (a, b) => a / b;

const res3 = getDiv(10, 0);