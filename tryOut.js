function printString(param) {
    console.log(param);
}
printString("Hello");
function printNumberArray(param) {
    console.log(param);
}
printNumberArray([3, "hello"]);
var options;
(function (options) {
    options[options["Yes"] = 0] = "Yes";
    options[options["No"] = 1] = "No";
})(options || (options = {}));
function selectOption(param) {
    console.log(param);
}
selectOption(options.Yes);
function printUser(param) {
    console.log(param);
}
;
printUser({ name: "Ajay", age: 3, place: "pilakavu" });
