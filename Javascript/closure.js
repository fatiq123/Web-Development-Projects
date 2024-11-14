function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Outputs: I'm outside!





// another example
function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3
