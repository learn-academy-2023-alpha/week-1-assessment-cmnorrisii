// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the .length built in method takes a string or array and basically counts the amount of indexes. if we console.log(cohort.length) we get a number of how many indexes it has, which is 10

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: putting a set of brackets [] at the end of your variable will go to a specific index of the variable. in our example we want to go to the 4 index, indexes for strings and arrays start at 0, so "o" is in the 4 index of our variable. console.log(greeting[4]) returns "o" in our terminal.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: index is a variable with 1 assigned to it, so effectively whenever we call on index we are inputing a 1. when we console.log(languages[index]) we are doing the same as if we console.log(languages[1]). we get Ruby when we console.log(languages[index]) because it is in the 1 index postion of our array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: some sort of error, i don't think .toUpperCase() works on arrays
// b) Verify and explain: yep, .toUpperCase() is a mutator method that doesn't work on arrays, to get the data within the array to be uppercase, we would need to convert the array to a string using .join() then we would be able to use .toUpperCase(). then we would need to convert our new string back to an array using .split(","). the "," in .split(",") seperates the indexes when converted back into an array. should look like this: console.log(weekendDays.join().toUpperCase().split(","));

// console.log(weekendDays.join().toUpperCase().split(","));

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: im not sure how typeof works with arrays, but maybe this will return "4 string" or "string 4" because the provided array has 4 string data types in it's indexes
// b) Verify and explain: ah, i've been tricked! it returned number, because .length provides the number of indexes in an array (4). so typeof returned the datatype that dataTypes.length provides, which is a number. cool. seems so obvious now.
