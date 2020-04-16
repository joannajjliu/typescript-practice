// benefits of ts: static type checking, accurate intellisense

//"tsc main.ts" in terminal to add a js file
// "tsc main --watch" will watch ts file for changes and recreate js file as needed
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
