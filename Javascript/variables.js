// const cannot change. its value cannot be changed once it is initialized
const notChange = 3;
console.log(notChange);


function main(name) {
    name = "Fatiq";
    return name;
}
n = main;
console.log(n);
