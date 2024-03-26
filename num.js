import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt({
    name: "User guess Number",
    type: "number",
    message: "Please guess a number b/w 1-6:"
});
if (answer["User guess Number"] == randomNumber) {
    console.log("You guess the right number");
}
else {
    console.log("You guess the wrong number");
}
