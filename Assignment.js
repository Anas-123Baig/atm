let car = 'subaru';
let animal = 'cat';
let number = 10;
console.log(`Is car == 'subaru'? I predict True. Result: ${car == 'subaru'}`);
console.log(`Is car == 'audi'? I predict False. Result: ${car == 'audi'}`);
console.log(`Is animal == 'cat'? I predict True. Result: ${animal == 'cat'}`);
console.log(`Is animal == 'dog'? I predict False. Result: ${animal == 'dog'}`);
console.log(`Is number == 10? I predict True. Result: ${number == 10}`);
console.log(`Is number == 20? I predict False. Result: ${number == 20}`);
console.log(`Is number > 5? I predict True. Result: ${number > 5}`);
console.log(`Is number < 5? I predict False. Result: ${number < 5}`);
console.log(`Is number != 10? I predict False. Result: ${number != 10}`);
console.log(`Is number != 20? I predict True. Result: ${number != 20}`);
let cars = 'subaru';
let animAl = 'Cat';
let numbEr = 10;
let array = ['apple', 'banana', 'cherry'];
console.log(`Is car == 'subaru'? I predict True. Result: ${car == 'subaru'}`);
console.log(`Is car == 'audi'? I predict False. Result: ${car == 'audi'}`);
console.log(`Is animal.toLowerCase() == 'cat'? I predict True. Result: ${animal.toLowerCase() == 'cat'}`);
console.log(`Is animal.toLowerCase() == 'dog'? I predict False. Result: ${animal.toLowerCase() == 'dog'}`);
console.log(`Is number == 10? I predict True. Result: ${number == 10}`);
console.log(`Is number == 20? I predict False. Result: ${number == 20}`);
console.log(`Is number > 5 and number < 15? I predict True. Result: ${number > 5 && number < 15}`);
console.log(`Is number < 5 or number > 15? I predict False. Result: ${number < 5 || number > 15}`);
console.log(`Is 'apple' in array? I predict True. Result: ${array.includes('apple')}`);
console.log(`Is 'grape' not in array? I predict True. Result: ${!array.includes('grape')}`);
//Alien colours 1
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player just earned 5 points.");
}
// Version that fails the if test
alien_color = 'red';
if (alien_color == 'green') {
    console.log("The player just earned 5 points.");
}
//Alien colours 2
alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Version that runs the else block
alien_color = 'red';
if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Alien colours 3
alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
// Version that runs the else if block
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
// Version that runs the else block
alien_color = 'red';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
// Stages of Life
let age = 25; // Set a value for the variable age
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Favorite Fruit
let favorite_fruits = ["apple", "banana", "mango"]; // Array of favorite fruits
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
// Hello Admin
let usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"]; // Array of usernames
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Remove all of the usernames from your array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// Checking Usernames
let current_users = ["admin", "Eric", "Alice", "Bob", "Charlie"];
let new_users = ["admin", "David", "Eve", "Frank", "George"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
// Ordinal Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1)
        suffix = "st";
    else if (number === 2)
        suffix = "nd";
    else if (number === 3)
        suffix = "rd";
    console.log(`${number}${suffix}`);
});
// Pizzas
let pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
pizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
console.log("I really love pizza!");
// Animals
let animals = ["Dog", "Cat", "Rabbit"];
animals.forEach(animal => console.log(`A ${animal} would make a great pet.`));
console.log("Any of these animals would make a great pet!");
// T-Shirt
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "TypeScript is cool!");
// Cities
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "UK");
// City Names
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("London", "UK"));
console.log(city_country("New York", "USA"));
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
console.log(make_album("Artist1", "Title1"));
console.log(make_album("Artist2", "Title2", 12));
console.log(make_album("Artist3", "Title3", 15));
// Magicians
let magicians = ["Magician1", "Magician2", "Magician3"];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
show_magicians(magicians);
// Great Magicians
function make_great(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
show_magicians(make_great([...magicians]));
// Unchanged Magicians
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
// Sandwiches
function make_sandwich(...items) {
    console.log(`Making a sandwich with ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly");
function make_car(manufacturer, model, ...args) {
    let car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }
    return car;
}
console.log(make_car("Toyota", "Corolla", "color", "red", "year", "2020"));
export {};
