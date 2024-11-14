// var, let, and const
// var is function-scoped or globally-scoped, meaning it ignores block scope and can be re-declared.
// let is block-scoped and cannot be re-declared in the same scope.
// const is also block-scoped but is used for constant values that cannot be reassigned.

function testVarLetConst() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 4; // Reassigns x within the function scope
        let y = 5; // New block-scoped variable y
        const z = 6; // New block-scoped constant z
        console.log(x, y, z); // Outputs: 4, 5, 6
    }

    console.log(x, y, z); // Outputs: 4, 2, 3
}

testVarLetConst();