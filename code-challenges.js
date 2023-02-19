// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry";
const fruit4 = "kiwi";
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// create a function called boilingPoint that takes a parameter and compares it to 212 degrees Fahrenheit.
// create a conditional statement within the function code block that returns whether the parameter is below, at, or above the boiling point.
// use string interpolation to pull the paramater into the return
// create a variable for fahrenheit at 212 degrees so that it can be used in later functions. alternatively, I could just use 212 in the conditional arguments. the result would be the same.
// add an else conditional to catch parameters that aren't numbers
// create a console log for each temp paramater to call on the function and display the output in the terminal

const boilingFahrenheit = 212;

const boilingPoint = (temp) => {
  if (temp < boilingFahrenheit) {
    return `${temp} is below boiling point`;
  } else if (temp === boilingFahrenheit) {
    return `${temp} is at boiling point`;
  } else if (temp > boilingFahrenheit) {
    return `${temp} is above boiling point`;
  } else {
    return "please input a number to indicate temperature";
  }
};

const temp1 = 42;
// Expected output: "42 is below boiling point"

const temp2 = 350;
// Expected output: "350 is above boiling point"

const temp3 = 212;
// Expected output: "212 is at boiling point"

console.log(boilingPoint(temp1));
// output: "42 is below boiling point"
console.log(boilingPoint(temp2));
// output: "350 is above boiling point"
console.log(boilingPoint(temp3));
// output: "212 is at boiling point"
console.log(boilingPoint("hello"));
// output: please input a number to indicate temperature
console.log(boilingPoint(35));
// output: 35 is below boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// .concat is a built in method that will combine two arrays
// .length is another built in method that counts the number of indexes in an array
// combine both arrays using .concat, then add .length at the end to count the indexes.
// place this in a console log to display the output in the terminal

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length);

// Expected output: 9
// actual output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// .reverse() is a built in method that will reverse an ARRAY, but we have a string
// use .split("") after currentCohort to convert the string into an array, followed by .reverse() to to reverse the indexes of said array, then use .join("") to convert the array back into a string. the output will be a reverse of the original string
// call on the above in a console log to display the output in terminal

const currentCohort = "Alpha 2023";

console.log(currentCohort.split("").reverse().join(""));

// Expected output: "3202 ahplA"
// actual output : "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// two methods to this problem.
// i can use the .lastIndexOf() built in method at the end of of variable containing an array to return the last index of a given value
// console.log(myNumbers.lastIndexOf(givenValue1)); output: 7
// if i want to use logic to do the same thing, i need to create a function (retrieveIndex) that when called upon initiates a for loop that looks at each index of the array and compares it to a given value, this for loop should start at the end of the array and work towards the beginning (8-0) ending at the 0 index and incrementing 1 index at a time. within the for loop of my retrieveIndex function, i also want to have a conditional statement that if a given index matches the paramater provided, i want to return that index.
// create a console.log() with each variable to display the output in the terminal.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];

const givenValue1 = 42;
// Expected output: 7
const givenValue2 = 10;
// Expected output: 8

// console.log(myNumbers.lastIndexOf(givenValue1));
// console.log(myNumbers.lastIndexOf(givenValue2));

const retrieveIndex = (value) => {
  for (let i = myNumbers.length - 1; i >= 0; i--) {
    if (myNumbers[i] === value) {
      return i;
    }
  }
};
console.log(retrieveIndex(givenValue1));
// output: 7
console.log(retrieveIndex(givenValue2));
// output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: 
// .sort() and .reverse() are mutators. .sort() takes an array and sorts them either alphabetically with characters, or numerically from smallest to largest. .reverse() when used after .sort() will sort our numbers from largest to smallest.
// apply the mutators to each variable to sort the numbers in each array from largest to smallest.
// create a console.log() to call upon our mutated variable.

// NOTE: I started with my given answer, but I wanted to go beyond just using mutators, so I tried creating a function that used an inner loop within a loop to sort each array. After spending more time than I care to admit on it, I decided that I was spending too much time on something that was beyond my scope. I feel like I got pretty close, but couldn't wrap up the final pieces. I'd love a chance to fully explain what I was trying to do with an instructor at some point if we have the time. I have commented out my code and terminal output further down for future discussion.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort().reverse()
sanDiegoWinterTemperatures.sort().reverse()

console.log(sanDiegoSummerTemperatures)
console.log(sanDiegoWinterTemperatures)



// const tempSort = (temp) => {
//     let sortedTemps = []
//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp.length; j++) {
//         console.log(temp[i] , temp[j])
//         if (temp[i] > temp[j] && temp[i] > sortedTemps[0]){
//             sortedTemps.unshift(temp[i])
//             console.log("if")
//             break     
//         } else if (temp[i] < temp[j + 1]){
//             sortedTemps.push(temp[i])
//             console.log("else if")
//             break
//         // } else {
//         //     sortedTemps.push(temp[i])
//         //     console.log("else");
//         //     break
//         }
//       }
//     }
//     return sortedTemps
//   }
// console.log(tempSort(sanDiegoSummerTemperatures))
// // console.log(sortedTemps);
// console.log(tempSort(sanDiegoWinterTemperatures));
// // console.log(sortedTemps);


// output:

// 79 79
// else if
// 80 79
// if
// 72 79
// else if
// 73 79
// else if
// 82 79
// if
// 77 79
// else if
// 76 79
// else if
// [ 82, 80, 79, 72, 73, 77, 76 ]
// 59 59
// else if
// 68 59
// if
// 62 59
// else if
// 59 59
// else if
// 66 59
// else if
// 67 59
// else if
// 66 59
// else if
// [ 68, 59, 62, 59, 66, 67, 66 ]