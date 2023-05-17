// Chapter 1 (Alerts)
// Question 1
alert("Kulsoom");
alert("Kazmi");
alert("kulsoomkazmi6@gmail.com");
alert(043217890);
alert("mai kuo btaon");

// Question 2
alert("Alert!You are learning javascript!");
// Question 3
alert("I dont like to give any message");


// Chapter 2
// Variables for strings:

// Q1
var fullName
// Q2
var lastName
lastName = "Kazmi";
// Q3 
var teamName = 'Scooby Dooby';
alert(teamName);
// Q4
var bestMan = "Charlie";
bestMan = "Chaplin";

// Chapter 3
// Variables for Numbers

// Q1
var caseQty;
// Q2
caseQty = 144;
// Q3
var num = 9;
// Q4
var sum = 2 + 2;
// Q5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);
// Q6
var num1 = 12222;
var num1 = num1 + 2345;
console.log(num1);

// Chapter 4
// Vriable names (Legal and illegal)

// Q1
var productCost = 3.45;
// Q2
var nameOfBand;
// Q3
var $total_Cost1 = 123;
// Q4
var fullName = firstName + lastName;
// Q5
// Legal variables
// var fullName
// var $full
// var full2
// var full_name
// Illegal variables
// var full name
// var 1full
// var full-name
// var alert

// Chapter 5
// Math Expression I
// Q1
// Modulo operator %
// Q2
var num = 20 % 6;
console.log(num);
// Q3
var largeNum = 1000 * 2000;
// Q4
var num1 = 3
var num2 = 6
var subtract = num1 - num2;
// Q5
var remainder = 20 % 6;
console.log(remainder);
// Q6
alert(4*8);

// Chapter 6
// Math Expression II
// Q1
x++
// Q2
x = 100
x--
console.log(x);
// Q3 
// 50
var x = 50;
var y = x++
console.log(y);
// Q4
// 49
var y = 50;
var z = --y;
console.log(z);
// Q5
var t = 2
var newNum = t--;
console.log(t);
console.log(newNum);
// Q6
var u = 3;
var originalNum = u++
console.log(u);
console.log(originalNum);
// Q7
var n = 12;
alert(n++);

// Chapter 7 (Math Expression III)
// Q1
var calculatedNum = 2 + (2 * 6);
// 14
// Q2
var calculatedNum = (2 + 2)*6
// 24
// Q3
var calculatedNum = (2 + 2) * (4 + 2);
// 24 
// Q4
var calculatedNum = ((2 + 2) * 4) + 2;
// 18

// Q5 (producing 56)
var cost = (2 + 2) * (4 + 10);   
// Q6 (producing 20)
var units = 2 + (2 * 4) + 10; 
// Q6 (producing 5)
var pressure = 4/2*4;


// Chapter 8 (Concatenating text strings)
// Q1
// "22"
// Q2
var message = "Hello," + "Dolly";
alert(message);

// Q3
alert("33" + 3);
// 333
// Q4
alert("Pakistan" + " " + "Zindabad");
// Q5
var textNumber = "string" + 12345;
console.log(textNumber);
// Q6
var fname = "Kulsoom";
var lname = "Kazmi";
var fullName = fname + " " + lname;
console.log(fullName);


// Chapter 9 (Prompts)
// Q1
var firstName = prompt("Enter first name");
// Q2
var country = prompt("Country?", "China");
// Q3
var yourName = prompt("Enter Your Name");
// Q4
var message = prompt("Welcome to the website");
// Q5
var msg = prompt("Hello");
var defaultResponse = prompt("Default response");
var userResponse = prompt("Enter your response");

// Chapter 10 (If statements)
// Q1
var city = "Karachi";
if (city == "Karachi"){
    console.log("The City of Lights")
}
// Q2
var x = 2;
var y = 2;
if (x === y){
    var z = prompt("Enter the value of z");
    console.log(z);
}
// Q3
var zipCode = +prompt("Enter your zip code");
if (zipCode === 10010){
    alert("Karachi")
}else{
    alert("please write correct city")
}
// Q4
// Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
var x = 1;
if (x === 1){
    x = 2;
    console.log(x)
}else{
    console.log("not matched")
}

// Chapter 11 (Comprision operators)
// Q1
var k = 2
var l = 3;
if (k !== l){
    console.log(true)
}
// Q2
var var1 = 2;
var var2 = 5;
if (var1 >= var2){
    console.log("Variable 1 is greater than or equal to variable 2")
}
// Q3
var var_1 = 2;
var var_2 = 3;
if (var_1 != var_2){
    var_1 = 10;
    console.log(var_1)
}
// Q4
if (3 != 5){
    alert("Congratulations")
}
// Q5
var fname =prompt("Enter your first name");
if (fname !== "Kulsoom"){
    alert("No match")
}

// Chapter 15(Array I)
// Q1
var empty_arr = [];
// Q2
var string_arr = ["string"];
// Q3
var alphabet = ["h","i","j","k"]
alert(alphabet[2]);
// Q4
var alphabet=["h","i","j","k", "l","m", "n", "o"];
alphabet.length

// Q5
var arr = [1];
arr[1] = 2;
alert(arr)

// Chapter 16 (Array II)
// Q1
var fruits = ['apple'];
fruits.push("Pineapple")
alert(fruits[1])
// Q2
var Alphabet=["h","i","j","k"]
Alphabet.pop()
// Q3
var Alphabet=["h","i","j","k"]
Alphabet.push("m", 2);


// Chapter 16(Array III)
// Q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
// Q2
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift(123);
// Q3
var pets = ['cat'];
pets.unshift("Dog");
alert(pets[0]);
// Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2,"L");
// Q5
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes = sizes.slice(0,3);
// Q6
var pets = ["dog", "cat", "ox", "duck", "frog"].

pets.splice(1,3, "puppy", "parrot")
console.log(pets)