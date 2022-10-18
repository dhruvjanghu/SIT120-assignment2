const now = new Date(Date.now());
console.log('the current time is');
console.log(now.toDateString());

const today = new Date();
const birthday = new Date('December 17, 1995 03:24:00');

const birthday = new Date('1995-12-17T03:24:00');

const birthday = new Date('1995, 11, 17');

const birthday = new Date(1995, 11, 17, 3, 24, 0);

const birthday = new Date(62802100000);

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

now.setFullYear(2020);
console.log(now.getFullYear());

now.setDate(10)
console.log(now.getDate());
let newDate = new Date();
setTimeout(() =>{
    newDate = Date.now()
    console.log(newDate - now);

}, 1000);
