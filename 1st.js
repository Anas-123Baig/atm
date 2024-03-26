let nAme = ("Dan");
console.log(nAme);
let Age = 39;
console.log(Age);
let agE = true;
console.log(agE);
let num1 = 10;
let num2 = 20;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2);
let NAME = "Farad";
let namE = "TOM";
console.log(NAME + namE);
let OTPcorrect = true;
let OTP = 987;
let user = "David";
if (user == "David") {
    if (OTPcorrect) {
        if (OTP == 987)
            console.log("welcome");
    }
}
else {
    console.log("invalid user");
    if (user == "anybody") {
        console.log("please login again");
    }
}
// Importing readline module for user input
import * as readline from 'readline';
// Creating readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to check eligibility
function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to buy tickets.");
    }
    else {
        console.log("Sorry, you are not eligible to buy tickets.");
    }
}
// Asking user for their age
rl.question('Please enter your age: ', (age) => {
    // Checking eligibility
    checkEligibility(Number(age));
    // Closing readline interface
    rl.close();
});
