//  alert("hello");


// 1)variables used in different ways//

var empId = 102;
var empName = "manu";
var empStatus = true;
var empProcess;
var empValue = null;

console.log(typeof empId, empId)
console.log(typeof empName, empName)
console.log(typeof empStatus, empStatus)
console.log(typeof empProcess, empProcess)
console.log(typeof empValue, empValue)


document.write(typeof empId, "<br/>",
    typeof empName, "<br/>",
    typeof empStatus, "<br/>",
    typeof empProcess, "<br/>",
    empId, "<br/>", empName, "<br/>", empStatus, "<br/>", empProcess)


// 2)let used in different ways//

let empId1;
// document.write(empId1)
console.log(empId1)

empId1 = "sss";
console.log(empId1)

empId1 = 5;
console.log(empId1)

empId1 = true;
console.log(empId1)

empId1;
console.log(typeof empId1, empId1)

let Sname1 = null;
console.log(Sname1)

Sname1 = 123;
console.log("Comparison", Sname1 == Sname1)
document.write("<h1>comparison</h1>", Sname1 == Sname1, "<br/>")

//3)const usage

const Sname = "manu";
console.log(Sname)

// Sname="ammu";
// console.log(Sname)

//operators =>assignment & comparison//

let x = 10;
let y = "10";

if (x == y) {
    document.write("Both are equal,<br/>")
} else {
    document.write("Both are not equal")
}

if (x === y) {
    document.write("Both are equal")
} else {
    document.write("Both are not equal")
}