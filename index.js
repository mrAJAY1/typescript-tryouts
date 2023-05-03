console.log("hello typeScript");
// Implicit Types
var helloWorld = "Hello, World!";
// helloWorld = 5; - this will give an error

// Explicit Types
var firstName = "John";
var lastName;
var age = 30;
var x = ["hello", 10];
// x = [10,"hello"];

// Enums
var Continents;
(function (Continents) {
  Continents[(Continents["North_America"] = 0)] = "North_America";
  Continents[(Continents["South_America"] = 1)] = "South_America";
  Continents[(Continents["Africa"] = 2)] = "Africa";
  Continents[(Continents["Asia"] = 3)] = "Asia";
  Continents[(Continents["Europe"] = 4)] = "Europe";
  Continents[(Continents["Antartica"] = 5)] = "Antartica";
  Continents[(Continents["Australia"] = 6)] = "Australia";
})(Continents || (Continents = {}));
//usage
var region = Continents.Africa;
var user = {
  name: "John",
  age: 3,
  id: 0,
};
// const WindowState: WindowStates = "I don't know, this is not a window" -> will throw an error
var WindowState = "open";
var lockState = "locked";
// const odd:oddNumberUnderTen = 8
var getLength = function (param) {
  return param.length;
};
getLength("test");
// getLength(2) -> error
