"use strict";
// benefits of ts: static type checking, accurate intellisense
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
// basic types: boolean, number, string
var isBeginner = true;
var total = 0;
var name = "Jojo";
// template strings:
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
// subtypes (i.e. null, undefined) of all other types:
//      i.e. null and undefined can be assigned to number, boolean, and string type variables
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array type (2 possble syntaxes)
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Mixed type arrays:
//      -> Tuple (number and order of types is fixed)
var person1 = ['Chris', 22];
// Enum type (i.e. giving more friendly/readable names to a set of numeric values):
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // logs 6
// Any type (use when not sure what the type will be)
//      When using Any type, not type checking is done (can come in handy)
//      Usage example: user input, third party libraries
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
// Unknown type solved the issue of intellisense not identifying errors with Any type
var myVariable = 'ten';
myVariable.toUpperCase(); // we have made the necessary type check (resolved red squigglies)
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
