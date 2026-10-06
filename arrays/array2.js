// Task 1: Initialize the Array
let greetings = Array(7).fill("Hello");
console.log(greetings);

// Task 2: Update the Array
// Fill the first 3 slots with "Hi" (you can change the number if you want)
greetings.fill("Hi", 0, 3);
console.log(greetings);

// Task 3: Populate the Array with a for Loop
let numbers = Array(5);
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10;
}
console.log(numbers);
