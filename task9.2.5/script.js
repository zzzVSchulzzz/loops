let a = 1
let b = 2

function operationSummation(a, b) {
      return  a + b
}

function operationSubstraction(a, b) {
    return  a - b
}

function operationMultiplication(a, b) {
    return  a * b
}

function operationDivision(a, b) {
    if (b != 0) {
        return a / b
    } else {
        return 'It is impossible to divide a number by zero.'
    }
}

console.log(operationSummation(8, 9))
console.log(operationSubstraction(6, 4))
console.log(operationMultiplication(4, 0))
console.log(operationDivision(1, 0))
