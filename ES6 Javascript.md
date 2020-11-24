# ES6 Javascript: The Compelete Developer's Guide

All the coding excercise from `Stephen Grider`




## Section 2: The `forEach` Helper

### Coding Excercise 1: Moving Away from For Loops

The code below is calling 'savePost' three times, but it is doing so using a for loop.  This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  Rather than using a for loop, refactor the code below to instead use the forEach helper.

```js
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
```

### Answer

```js
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
     posts.forEach(post=>savePost(post));
}
```

### Coding Excercise 2:Processing Values

The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.

```js
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
```

### Answer

```js
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach( image => areas.push (image.height * image.width));
});
```

## Section 3: The `map` Helper

Coding Excercise 3: Plucking Values

Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!

```js
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;
```

### Answer

```js
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(image=>image.height)
```

### Coding Excercise 4: Calculating Values with Map

Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.

```js
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;
```

### Answer

```js
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => trip.distance / trip.time);
```

### Coding Excercise 5: Really Hard - Implementing 'Pluck'

This is a hard one!
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

Example: 

```js
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
```

Hint:

Remember that you can access a property on an object by using square bracket notation. For example...

```js
var person = { name: 'Bill' };
person['name'] // returns 'Bill'
```

```js
function pluck(array, property) {
    
}
```

### Answer

```js
function pluck(array, property) {
    let res = array.map(arr=>arr[property])
    return res
}
```

## Section 4: The `filter` Helper

### Coding Excercise 6: Filtering Values

Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

```js
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
```

### Answer

```js
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(number => number > 50);
```

### Coding Excercise 7: Handling Permissions with Filter

Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

```js
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;
```

### Answer

```js
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(user => user.admin === true)
```

### Coding Excercise 8: Challenging! Implementing 'reject'.

This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.


For example:

```js
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
```

```js
function reject(array, iteratorFunction) {
  
}
```

### Answer

```js
function reject(array, iteratorFunction) {
    return array.filter(arr => !iteratorFunction(arr))
}
```

## Section 5: The `find` Helper

### Coding Excercise 9: Finding Admin Users

Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

```js
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
```

### Answer

```js
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin === true)
```

### Coding Excercise 10: What's Your Balance?

Find the account with a balance of 12 and assign it to the variable 'account'.

```js
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
```

### Answer

```js
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance === 12);
```

### Coding Excercise 11: Really Challenging: Custom findWhere Helper

This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:

```js
findWhere(ladders, { height: '20 feet' });
```
The object ```{ ladders: '20 feet' }``` should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

In summary:

```js
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
```

Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use ```Object.keys(criteria)[0]``` to figure out the name of the property on the object.  For example, ```Object.keys({ height: '20 feet' })``` would return ```'height'```.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like ```element[property] === criteria[property]```.

```js
function findWhere(array, criteria) {
  
}
```

### Answer

```js
function findWhere(array, criteria) {
    return array.find(arr => {
        let objName = Object.keys(criteria)[0];
        return arr[objName] === criteria[objName]
    })
}
```

## Section 6: The `every` and `some` Helper

### Coding Excercise 12: Finding Submitted Users

Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

```js
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;
```

### Answer

```js
var users = [
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user=>user.hasSubmitted === true);
```

### Coding Excercise 13: In Progress Network Requests

Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

```js
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
```

### Answer

```js
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => request.status === 'pending');
```

## Section 7: The `reduce` Helper

### Coding Excercise 14: Distance Traveled

Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

```js
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;
```

### Answer

```js
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((sum,trip) => { return sum + trip.distance}, 0);
```

### Coding Excercise 15: Reducing Properties

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

```js
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {
    
}, { sitting: 0, standing: 0 });
```

### Answer

```js
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') { previous.sitting += 1 }
    if (desk.type === 'standing') { previous.standing += 1 }
    return previous;
 }, { sitting: 0, standing: 0 });
```

### Coding Excercise 16: Hardmode: Custom 'Unique' Helper

Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
```var numbers = [1, 1, 2, 3, 4, 4];```
Your function should return
```[1, 2, 3, 4]```
Hint: Use the 'reduce' and 'find' helpers.  

```js
function unique(array) {
  
}
```

### Answer

```js
function unique(array) {
  return array.reduce((previous, arr) => {
     if(!previous.find( num => num === arr )){
         previous.push(arr);
     } 
     return previous;
  }, []);
}
```

## Section 8: `const`/`let`

### Coding Excercise 17: A Constant Exercise of Letting Variables Be Variables

Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.

### Answer

```js
const name = 'Juliano';
let age = 24;
const dateOfBirth = '14/08/1992';
```

### Coding Excercise 18: Const/Let Refactoring

The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords.  Be sure to consider whether the variable should be declared using 'const' or 'let' depending on whether the variable gets reassigned or not.

```js
var statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```

### Answer

```js
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```

## Section 9: Template Strings

### Coding Excercise 19: Template Strings in Practice

Refactor the function to use template strings

```js
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
```

### Answer

```js
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
```

### Coding Excercise 20: Name Helpers

Refactor the function to use template strings

```js
function fullName(firstName, lastName) {
  return firstName + lastName;
}
```

### Answer

```js
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

## Section 10: Arrow function

### Coding Excercise 21: Refactoring Keyword Functions

The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  

Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:

1. If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
2. If the function has a single argument, the parentheses around the argument list can be removed

```js
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Answer

```js
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Coding Excercise 22: Arrow Functions Aren't Always a Solution

Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?

```js
const profile = {
    name: 'Alex'
};
```

### Answer

```js
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};

profile.getName();
```
_The keyword 'this' is a reference to the functions outer lexical environment...it points to the object that contains, and invokes, the function. However, if the function is inside another function, as it is with the 'map' helper, it will not point to the containing object, but instead points to the window object. Many consider it to be a bug of JavaScript, which is why they implemented the arrow function syntax. When using arrow function syntax, the 'this' keyword points to the containing object as expected._

## Section 11: Enhanced Object Literals

### Coding Excercise 23: Multiple Properties with Enhanced Notation

Refactor to use enhanced literal notation

```js
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
```

### Answer

```js
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };
```

### Coding Excercise 24: Condensing Code with Enhanced Literals

Refactor the following to use enhance object literal syntax

```js
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };
```

### Answer

```js
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };
```

### Coding Excercise 25: Literals in Functions

Refactor to use enhanced literal notation

```js
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
```

### Answer

```js
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}
```

### Coding Excercise 26: Refactor to use enhanced literal notation

```js
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
```

### Answer

```js
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
```

## Section 12: Default Function Arguments

### Coding Excercise 27: Using Default Arguments

Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.

```js
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}
```

### Answer

```js
function sum(a = 0, b = 0) {
  return a + b;
}
```

### Coding Excercise 28: Dumping Unused Code

Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.

```js
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
```

### Answer

```js
function addOffset(style = {}) {
  style.offset = '10px';
  
  return style;
}
```

## Section 13: Rest and Spread operators

### Coding Excercise 29: Many, Many Arguments

Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.

```js
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
```

### Answer

```js
function product(...numbers) {
  //var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}
```

### Coding Excercise 30: Spreadin' Arrays

Refactor the following to use the spread operator.

```js
function join(array1, array2) {
  return array1.concat(array2);
}
```

### Answer

```js
function join(array1, array2) {
  //return array1.concat(array2);
  return [...array1, ...array2];
}
```

### Coding Excercise 31: Mixing Rest and Spread

Refactor the following to use the only the rest operator

```js
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
```

### Answer

```js
function unshift(array, ...rest) {
  //return [a, b, c, d, e].concat(array);
  return [...rest, ...array];
}
```

## Section 14: Desctructuring

### Coding Excercise 32: Destructuring in Practice

The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?

```js
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
```

### Answer

```js
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

// Solution 1
function isEngineer(profile) {
  let { title, department } = profile;
  return title === 'Engineer' && department === 'Engineering';
}

// Solution 2
function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);
```

### Coding Excercise 33: Array Destructuring in Practice

The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form ```[subject, time, teacher]```

The resulting data structure should look something like the following:

```const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]```

```js
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map((item) => {
    return 1;
});
```

### Answer

```js
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return ({subject, time, teacher});
});

classesAsObject;
```

### Coding Excercise 34: Recursion with Destructuring

This one is probably the hardest exercise in the entire course!  

Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?

```js
const numbers = [1, 2, 3];

function double() {
    
}
```

Recursion with Destructuring

This one is probably the hardest exercise in the entire course!  

Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?

```js
const numbers = [1, 2, 3];

function double() {
    
}
```

### Answer

```js
const numbers = [1, 2, 3];
let finalResults = [];

function double(numbers) {    
    const [ number, ...rest ] = numbers;
    if(number === undefined) {
        return finalResults;
    } else {
        finalResults.push(number*2);
        return double([...rest]);
    } 
}
```

## Section 15: Classes

### Coding Excercise 35: Game Classes

You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster

```js
class Monster {
  
}
```

### Answer

```js
class Monster {
  constructor(options) {
      this.health = 100;
      this.name = options.name;
  }
}

const monster = new Monster({ name: 'Jade' });
monster;
```

### Coding Excercise 36: Subclassing Monsters

Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10

```js
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake {
  
}
```


### Answer

```js
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    
    bite(snake) {
        return snake.health -= 10;
    }
}

const snake1 = new Snake({ name: 'Fred' });
const snake2 = new Snake({ name: 'Willy' });
snake1.bite(snake2);
console.log(snake1);
console.log(snake2);
```
