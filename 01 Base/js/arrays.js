// -=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-
//let array = new Array();
let array = [];

let colors = ["red", "green", "blue", "black"];
const mixed = [120, null, "hello", true, [1, 2, 3], { id: 1002, title: "Super" }, () => { }];

colors[3] = "pink";
colors[colors.length - 1]; // last item
// all values between are undefined
// [4]...[19]: undefined
colors[20] = "white"; // !bad practice

console.log(colors);

console.log("[3]:", colors[3]); // "black"
console.log("[4]:", colors[4]); // undefined
console.log("[20]:", colors[20]); // white

console.log("Colors arr length: ", colors.length); // 21

// access by index: 0>
console.log("Colors: ", colors);

colors[0] = "yellow";
console.log("First color: ", colors[0]);
console.log("Mixed arr length: ", mixed.length); // 7

console.log("Is Array: ", Array.isArray(colors)); // true

// ------------ methods
colors.pop();           // remove last
colors.push("purple");  // insert last
colors.shift();         // remove first
colors.unshift("brown");// insert first

console.log("Colors: ", colors);

let numbers = [4, 60, 1, -1, 0, -3, 99, -4, 120, 1, -4, 44, -10];

console.log("Numbers:", numbers);

console.log("Index of 1: ", numbers.indexOf(1)); // 2, if not found: -1
console.log("Last Index of 1: ", numbers.lastIndexOf(1)); // 9

if (numbers.indexOf(1) === numbers.lastIndexOf(1)) {
    console.log("1 appears only once in array!");
}

if (numbers.indexOf(120) !== -1)
    console.log("Array contains 120 value!");
else
    console.log("Array does not contains 120 value!");

console.log("There is some negative:", numbers.some(x => x < 0));

let firstHalf = numbers.slice(0, numbers.length / 2);
console.log("First Half:", firstHalf);

numbers[numbers.length - 1]; // last

numbers.splice(1, 3); // change original array
console.log("After splice:", numbers);

numbers.sort(); // lexicograph mode
console.log("Sorted Numbers:", numbers);

// comparison result: 
// 0 - element are equals
// <0 - 1st < 2st
// >0 - 1st > 2st
numbers.sort((a, b) => a - b); // change original array
console.log("Custom sort Numbers:", numbers);

numbers.fill(7, 1, 3); // [1...3) - change original array
console.log("Numbers:", numbers);

console.log("Find of 1: ", numbers.find(x => x > 100));             // 120
console.log("Find index of 1: ", numbers.findIndex(x => x > 100));  // 9

// return copy array with true values
console.log("Filtered: ", numbers.filter((x) => x % 2 === 0));

// return copy array with mapped values
console.log("Mapped:", numbers.map((x) => x + "%"));

numbers.forEach(x => {
    if (x > 10) console.log(x + '!');
});

// we can use method chain: method1().method2().method3().forEach() - X
console.log(numbers.slice(3, 7).map((x) => x * x));

console.log("Reversed:", numbers.reverse()); // change original array

// ------------------- reduce()
numbers = [4, 3, 6, 2, 10];

// current: 4
// result: 0
numbers.reduce((result, current) => result + current, 0); // summa

// [r]ed + [g]reen + [b]lue = 'rgb'
const letters = colors.reduce((r, c) => r + c[0], "");
console.log("Letters:", letters.toUpperCase()); // 'RGB'
