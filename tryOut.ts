function printString(param: string) {
  console.log(param);
}
printString("Hello");

type stringAndNumberArray = [number, string];

function printNumberArray(param: stringAndNumberArray) {
  console.log(param);
}
printNumberArray([3, "hello"]);

enum Options {
  Yes,
  No,
}

function selectOption(param: Options) {
  console.log(param);
}
selectOption(Options.Yes);

interface User1 {
    name:string,
    age:number,
    place:string
}
function printUser(param:User1){
    console.log(param)
};
printUser({name:"Ajay",age:3,place:"pilakavu"});