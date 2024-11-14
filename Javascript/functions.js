//Function Expressions (Anonymous Functions)
// In a function expression, the function is assigned to a variable and can be invoked using that variable name. These functions are anonymous (no name) and do not get hoisted.
const multiply = function (x, y) {
    return x * y;
};
console.log(multiply(2,3));


// Arrow Functions
// Introduced in ES6, arrow functions provide a shorter syntax and do not have their own this context. They’re great for shorter functions and inline expressions.
const divide = (a,b) => a/b;
console.log(divide(10,2));
// For single-parameter functions, parentheses around the parameter are optional:
const square = x => x*x;
console.log(square(4));


// parameters and arguments
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

// Default Parameters
function sayHello(name = "Guest") {
    return `Hello ${name}`;
}
console.log(sayHello()); // outputs: Guest
console.log(sayHello("alice")); // ouputs: alice instead of Guest


