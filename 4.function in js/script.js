console.log("this is tutorial of functions");

function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1"
    console.log(greetText +" "+name)
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "GoodMorning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
//greet(name3, greetText);
//let returnVal = greet(name3);
//console.log(returnVal) 
let returnVal = sum(1,2,3);
console.log(returnVal) 
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
