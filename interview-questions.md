# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: Git is how we send and receive changes to data from our local to another local or to a database. Github is a graphic user interface for git that streamlines the changes to data by letting users review pull requests and merge them afterwards.

Researched answer: Git (Global Information Tracker) is a version control system that allows for many people to contribute and share changes in code to the same code base. Github is a GUI that allows users to manage git repositories and offers more funtionality and resources when pushing and pulling code branches to and from git repositories.

2. Which JavaScript operators will return a Boolean value?

Your answer: Comparison operators (==, ===, !==, etc) are used to compare two values and returns a Boolean value (true/false)

Researched answer: Comparison operators, logical operators (&&, ||), relational operators (in, instanceof)

3. What is an index? What is the difference between index and value?

Your answer: An index is a position of a value within a string or an array, if I have an array: 

const myArray = [1, 2, 3, 4, 5]

then the index [ 1 ] has a value of 2, because we start at the 0 index when counting through a string or array.

Researched answer: Strings and arrays have a length property, and each character or value is assigned a placement called an index. When we want to reference an character or value within a string or array we can call upon its index. indexes start at 0 for both strings and arrays.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: An array [] is a collection of data types. A string "" is a data type that is a collection of characters wrapped in quotation marks. An array can contain a collection of strings; 

const greeting = ["hello", "my", "name", "is", "CJ"];

and each data type within this array has an index starting at 0.

const hello = "hello";

this variable called hello is a string, and each character within the string has an index starting with 0.

Strings are a specific data type that js recognizes, while arrays are a collection of any data type that js recognizes. 

Researched answer: Strings are a collection of characters. They have a length property and each character can be accounted for by recalling its index starting at 0 (zero indexed). Arrays are collections of ordered data, and can contain any type of data JS recognizes. They are zero indexed just like strings. 

Both strings and arrays have a length property.

Strings and arrays have different specific built in methods that can be used to mutate or modify. For example .toUpperCase() does not work on arrays, and .push() does not work on strings. 

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming requires to programmers acting in different roles, the "driver" and the "navigator". The driver is the one actually coding, they share their screen and take directions from the navigator. The navigator tells the driver what to code, they also keep an eye out for syntax errors do research if necessary to get past small blockers. 

Researched answer: Pair programming is two people collaborating on one code source to collectively produce one program. The two people are each given a role, the "driver" and the "navigator". The driver is operating the text editor/terminal, and actually responsible for the coding taking place. They should share their screen(s) with the "navigator" who is giving the driver direction on what to code while keeping an eye out for errors, bugs, and typos. The two programmers should switch roles often to give an opportunity for a break, and to allow both people to get familiar with the code source. The key to good pair programming is effective communication, the pair needs to reach a state of shared understanding with what the outcome of their code should be.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: functions that operate on other functions, either by calling on a function as an argument for another function, or by returning a function as the result of another function. I just used function 6 times in a sentence.

2. Jest: Jest is a JS testing framework that works with React.js as well as angular, babel, typescript, node, etc. It allows us to test our code to see if it works as intended, and helps identify bugs.

3. Objects: Objects are a data type, they are used to store collections of data. All of our primitive values so far have been objects. Objects can be seen as a collection of properties, data properties and accessor properties. Objects let us associate values with functions and store them.

4. Method: Actions that can be performed on objects. Methods contain a function definition stored as a property value. We can use methods on objects to run a specific function within an object.

5. Classes: The blueprint or templates for objects. Classes are reusable and customizable. They are a type of function that contain data and behavior and have their own scope. Classes have their own keywords that create and access information. We can create a class and then assign it to multiple different variables, and then call on those variables to perform actions within those classes.
