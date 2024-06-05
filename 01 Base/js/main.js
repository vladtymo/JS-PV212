// ----------- Console -----------
console.log("Information");
console.table(["apples", "oranges", "bananas"]);
console.warn("Warning");
console.error("Error message");

// ------------- variables -------------
let price = 1300;                   // number
let koef = -44.05;                  // number
let length = 1000000n;              // BigInt

let isValid = true;                 // Boolean

let login = "hello_js";             // string
let name = 'My name is "Vlad"';     // string
let letter = 'A';                   // string

let undefVar;                       // undefined
let activeUser = null;              // null

let user = {
    id: 3344,
    login: "vladdd",
    birthdate: null,                // good practice
    address: undefined              // bad practice
}; // object

user.id = 4455;

console.log(user.login); // "vladdd"
console.log(user.email); // undefined

let add = function (a, b) { console.log(a + b); }   // function expression       
let mult = (a, b) => console.log(a * b);            // arrow function

let arr = [10, -3, 0, "red", true, [1, 2, 3], add]; // len: 8

arr[0];         // 10
arr[5][0];      // 1
add(4, 6);      // 10
arr[6](9, 3);   // 12

arr[100]; // undefined

// add new item
arr.push(900);
console.log(arr.length); // len: 8

let myID = Symbol("3322-4");
let yourID = Symbol("3322-4");

// typeof - check data type
console.log(typeof (price));
console.log(typeof (undefVar));
console.log(typeof (activeUser));
console.log(typeof (add));
console.log(typeof (arr));

// dynamic typing / weak typing (duck typing)
price = "4200$";        // change number to string
console.log(typeof (price));

// if (myID == yourID) { } // false

// ------------ const
koef = 39.99;
koef += 10;
koef++;

// console.log(koef);

const id = 5099;
// id += 1; - error

// // Math - object with math methods and constants
Math.random(); // return random value in range [0...1): 0.4756834
Math.floor(3.9); // 3
Math.ceil(3.1); // 4
Math.round(3.5); // 4

// // ------------- scopes: local, global, function
let globalVar = 45;

if (true) {
    let localVar = 70;
}

function test() {
    let funcVar = 33;

    if (true) {
        let localVar = 70;
    }
}

console.log(globalVar);     // yes
//console.log(localVar);    // no
//console.log(funcVar);     // no

// // ------------- operators
let str1 = "First";
let str2 = "Second";

// string concat: str + str
console.log(str1 + str2); // FirstSecond

// interpolation: `...${expression}...`
console.log(`Hello, dear ${login}!`);

// ----------------- type conversion -----------------
console.log(2 + 2);     // 4
console.log("2" + "2"); // "22"
console.log("2" + 2); // "22"
console.log("2" * 2); // 4

// // ----------------- statements -----------------
// if (koef > 0) {

// } else if (false) { }
// else { }

// switch (login) {
//     case 'blabla':
//         break;

//     default:
//         break;
// }

// for (let i = 0; i < arr.length; i++) {
// }

console.log(`Koef is ${koef >= 20 ? "big" : "small"}!`);

// // ----------------- browser dialogs -----------------
alert("Alert mesage!");

const email = prompt("Enter your email: ");

// string concatenation: str + str
console.log("Hello dear, " + email + "!");
// string interpolation: `...${}...`
console.log(`Hello dear, ${email}!`);

// convert string to number: +"str" Number(value) parseInt() parseFloat()
const year = +prompt("Enter current year: ");

console.log("Current year: ", year);
console.log("Next year: ", year + 1);

let exit = confirm("Do you want to exit?");

if (exit) console.log("Have a good day!");
else console.log("Let's continue!");

// -------- conversion
+"123$"; // NaN (Not a Number)
Number("123UAH"); // NaN
parseInt("123!!!"); // 123