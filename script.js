console.log("Hello, welcome to the food app");
console.log("Lets get started");
let username = prompt("Please create a username");
let password = prompt("Please create a password");
console.log("Thank you for creating an account");

console.log("Please enter your login information");
let tryuser = prompt("Username");
let trypass = prompt("Password");

while (username != tryuser && password != trypass) {
  console.log("Incorrect login information, please try again");
  tryuser = prompt("Enter your Username");
  trypass = prompt("Enter your Password");
}

console.log("You have logged in successfully");

let balance = 10;
console.log("Your balance is " + " " + balance + "$");
const q1 = prompt("Would you like to add money to your account?");

if (q1 == "yes") {
  const q2 = prompt("How much would you like to add?");
  balance = balance + Number(q2);
  console.log("Your balance is " + " " + balance + "$");
} else {
  console.log("Great! You are all set!");
}

const q4 = prompt("Would you like a burger?");

if (q4 == "yes") {
  console.log("Please choose what burger you want");

  let burgertypes = ["Cheeseburger", "Chicken Burger", "Hamburger"];

  let price = [10, 8, 5];

  console.log("choice 1: " + burgertypes[0] + " " + price[0] + "$");
  console.log("choice 2: " + burgertypes[1] + " " + price[1] + "$");
  console.log("choice 3: " + burgertypes[2] + " " + price[2] + "$");

  let q5 = prompt("What would you like?");

  if (q5 === "choice 1") {
    console.log("You have ordered " + burgertypes[0]);
    console.log("Your total is " + price[0] + "$");
    balance = balance - price[0];
    console.log("Your balance is " + balance + "$");
  } else if (q5 === "choice 2") {
    console.log("You have ordered " + burgertypes[1]);
    console.log("Your total is " + price[1] + "$");
    balance = balance - price[1];
    console.log("Your balance is " + balance + "$");
  } else if (q5 === "choice 3") {
    console.log("You have ordered " + burgertypes[2]);
    console.log("Your total is " + price[2] + "$");
    balance = balance - price[2];
    console.log("Your balance is " + balance + "$");
  } else {
    console.log("Ok, Have a great day ");
  }
}
