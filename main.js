"use strict";
// benefits of ts: static type checking, accurate intellisense
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// Type inference:
var a;
a = 10;
a = true;
var b = 20;
// b = true; //has type error (due to type inference)
// Union types
var multiType;
multiType = 20;
multiType = true;
// Typescript functions
function add(num1, num2) {
    if (num1 === void 0) { num1 = 6; }
    //optional params must always be after required params
    //num1 has a default, num2 is optional
    var totalSum = num1 + num2;
    console.log(totalSum);
    return totalSum;
}
add(5, 10);
add(5);
;
function fullname(person) {
    console.log(person.firstName + " " + person.lastName);
}
;
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullname(p);
// ts Classes (like in ES6, C#, and Java)
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Baedee");
console.log(emp1.employeeName);
emp1.greet();
// class inheritance:
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager " + this.employeeName + " delegates tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bello');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// access modifiers (keywords setting accessibility of class properties and methods):
//public -> default, each class property is public, and can be freely accessed throughout program
//private -> property only accessible within own class; not accessible by derived class, nor outside call
//protected -> property accessible by derived class (this.employeeName can be used in Manager class), 
//              but not via outside call (m1.employeeName DOSEN'T work)
