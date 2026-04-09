// Timer Functions in JavaScript
// This file demonstrates various timer functions available in JavaScript

// 1. setTimeout - Executes a function once after a specified delay
console.log("Starting setTimeout example...");

// Basic setTimeout
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

// setTimeout with function reference
function delayedMessage() {
    console.log("Delayed message executed!");
}

const timeoutId = setTimeout(delayedMessage, 3000);

// setTimeout with parameters
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}

setTimeout(greet, 1000, "John", 25);

// 2. clearTimeout - Cancels a scheduled setTimeout
console.log("Demonstrating clearTimeout...");

const timeoutToCancel = setTimeout(() => {
    console.log("This will be cancelled!");
}, 5000);

// Cancel the timeout before it executes
clearTimeout(timeoutToCancel);
console.log("Timeout cancelled");

// 3. setInterval - Executes a function repeatedly at specified intervals
console.log("Starting setInterval example...");

let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Interval execution #${counter}`);

    // Stop after 5 executions
    if (counter >= 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);

// 4. clearInterval - Cancels a scheduled setInterval
console.log("Demonstrating clearInterval...");

let count = 0;
const intervalToCancel = setInterval(() => {
    count++;
    console.log(`Counting: ${count}`);
}, 500);

// Stop the interval after 3 seconds
setTimeout(() => {
    clearInterval(intervalToCancel);
    console.log("Interval cancelled after 3 seconds");
}, 3000);