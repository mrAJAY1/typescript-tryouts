console.log("hello typeScript");

// Implicit Types
let helloWorld = "Hello, World!";
// helloWorld = 5; - this will give an error

// Explicit Types
let firstName: string = "John";
let lastName: string;
let age: number = 30;
// age = "jay";
// firstName = 5;
// lastName = {};

// Built-in Types
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["hello", 10];
// x = [10,"hello"];

// Enums
enum Continents {
  North_America, //0
  South_America, //1
  Africa, //2
  Asia,
  Europe,
  Antartica,
  Australia,
}
//usage
var region = Continents.Africa;

// Interface
interface User {
  name: string;
  age: number;
  id: number;
}
const user: User = {
  name: "John",
  age: 3,
  id: 0,
};

// Composing types -> Union
type WindowStates = "open" | "closed" | "minimized";
type lockStates = "locked" | "unlocked";
type oddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

// const WindowState: WindowStates = "I don't know, this is not a window" -> will throw an error
const WindowState: WindowStates = "open";
const lockState: lockStates = "locked";
// const odd:oddNumberUnderTen = 8

const getLength = (param: string | string[]) => {
  return param.length;
};
getLength("test");
// getLength(2) -> error
