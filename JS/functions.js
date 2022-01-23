function add(a, b) {
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function findTheSmallestValue(array){
    let smallest = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i] < smallest){
            smallest = array[i]
        }
    }
    return smallest
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    findTheSmallestValue
}
