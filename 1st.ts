//AgeEligibilityChecker
    // Importing readline module for user input
import * as readline from 'readline';

// Creating readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check eligibility
function checkEligibility(age: number): void {
    if(age >= 18) {
        console.log("You are eligible to buy tickets.");
    } else {
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



