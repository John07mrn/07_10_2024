// functii
// functii simple
//aici doar am definit functia
function logHelloToConsole() {
    console.log("Hello");
}
//aici am apelat functia
//o putem apela de nenumarate ori 
logHelloToConsole();
logHelloToConsole();
logHelloToConsole();

// functii cu parametrii
// Cream GE Docs = >> /** + Enter. Hinturi pentru cine foloseste functiile noastre. 
/**
 * This functions logs in console the mathemathical equation 
 * and the result of adding a to b.
 * @param {number} a 
 * @param {number} b 
 */
function logSum(a, b) {
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);   // string interpolation "(`${a}`)" 
}

logSum(12, 33);
logSum(3, 5);

// functii cu return
/**
 * Computes the sum of a and b and returns the result
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
function getSum(a, b) {
    let sum = a + b;
    return sum;
}

let result1 = getSum(12, 13);
console.log('computed sum of 12 and 13 is ', result1);
let result2 = getSum(result1, 21);
console.log(`Computed sum of ${result1} and 21 is ${result2}`);

// functii anonime
//E recomandat sa salvam functiile in constante(const) - de regula nu se schimba.

const sayHello = function () {
    console.log('hello');
}

sayHello();
sayHello();

//exemplu functii anonime


function modifyWithCallBack(name, callback) {
    const modifiedName = callback(name);
    return modifiedName;
}

const modified = modifyWithCallBack('david', function (name) {
    return name.toUpperCase();
});

console.log(modified);

// functii sageata (Arrow functions)
//functioneaza fara acolade
const sayGoodbye = () => console.log("Goodbye!");


sayGoodbye();

const sayGoodbyeTo = name => console.log(`Goodbye ${name}!`);

sayGoodbyeTo("David");

const sayHelloAndGoodbyeTo = name => {
    console.log(`Hello ${name}!`);
    console.log(`Goodbye ${name}!`);
};

sayHelloAndGoodbyeTo("George");
sayHelloAndGoodbyeTo("John");