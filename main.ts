// benefits of ts: static type checking, accurate intellisense

//"tsc main.ts" in terminal to add a js file
// "tsc main --watch" will watch ts file for changes and recreate js file as needed
// "node main" to run js file
// "nodemon main" to continue running js file, and watch for changes

export {}
let message = "Welcome back";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

// basic types: boolean, number, string
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Jojo";

// template strings:
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

// subtypes (i.e. null, undefined) of all other types:
//      i.e. null and undefined can be assigned to number, boolean, and string type variables
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Array type (2 possble syntaxes)
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Mixed type arrays:
//      -> Tuple (number and order of types is fixed)
let person1: [string, number] = ['Chris', 22];

// Enum type (i.e. giving more friendly/readable names to a set of numeric values):
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c); // logs 6

// Any type (use when not sure what the type will be)
//      When using Any type, not type checking is done (can come in handy)
//      Usage example: user input, third party libraries
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

// Unknown type solved the issue of intellisense not identifying errors with Any type
let myVariable: unknown = 'ten';
(myVariable as string).toUpperCase(); // we have made the necessary type check (resolved red squigglies)

function hasName (obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}

// Type inference:
let a;
a = 10;
a = true;

let b = 20;
// b = true; //has type error (due to type inference)

// Union types
let multiType: number | boolean;
multiType = 20;
multiType = true;

// Typescript functions
function add(num1: number = 6, num2?: number): number {
    //optional params must always be after required params
    //num1 has a default, num2 is optional
    let totalSum: number = num1 + num2;
    console.log(totalSum);
    return totalSum;
}
add(5, 10);
add(5);

// Object (Interface) type
interface Person {
    firstName: string;
    lastName?: string; //lastName is an optional property
};

function fullname(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullname(p);

// ts Classes (like in ES6, C#, and Java)

class Employee { // Employee class
    employeeName: string; // class property -> default is public property

    constructor(name: string) { // constructor
        this.employeeName = name;
    }

    greet() { // method
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee("Baedee");
console.log(emp1.employeeName);
emp1.greet();

// class inheritance:
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName); //super call to the base class constructor
    }
    delegateWork() {
        console.log(`Manager ${this.employeeName} delegates tasks`);
    }
}

let m1 = new Manager('Bello');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// access modifiers (keywords setting accessibility of class properties and methods):
//public -> default, each class property is public, and can be freely accessed throughout program

//private -> property only accessible within own class; not accessible by derived class, nor outside call

//protected -> property accessible by derived class (this.employeeName can be used in Manager class), 
//              but not via outside call (m1.employeeName DOSEN'T work)
