let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

console.log(fruits.find((fruit) => fruit === 'apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));
// -1 means not found
console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));
console.log(fruits.push('kiwi'));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

let numbers = [3,2,5,4,7]
console.log(numbers.sort());

console.log(fruits.slice(1,3));

console.log(fruits.slice(1));
console.log(fruits.slice(-1));

fruits.forEach((fruits) => console.log(fruits));
