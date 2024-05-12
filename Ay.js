console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
let name = "\t\n Eric \t\n";
console.log(`Original: '${name}'`);
console.log(`Stripped: '${name.trim()}'`);
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}.`);
// This is a simple program that prints a famous quote
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
let names = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));
names.forEach(name => console.log(`Hello, ${name}! How are you today?`));
let vehicles = ["Honda motorcycle", "Toyota car", "Boeing airplane"];
vehicles.forEach(vehicle => console.log(`I would like to own a ${vehicle}.`));
let guest4 = ["Alice", "Bob", "Charlie"];
guest4.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner.`));
console.log(`${guest4[0]} can't make it to the dinner.`);
guest4[0] = "David";
guest4.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner.`));
console.log("I found a bigger dinner table.");
guest4.unshift("Eve");
guest4.splice(guest4.length / 2, 0, "Frank");
guest4.push("Grace");
guest4.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner.`));
// Let's use different guest names this time
let guest1 = ['John', 'Jane', 'Jim', 'Jill'];
console.log("I can only invite two people for dinner due to an issue with the dinner table.\n");
while (guest1.length > 2) {
    console.log(`Sorry ${guest1.pop()}, you're not invited to the dinner.`);
}
guest4.forEach(guest4 => console.log(`${guest4}, you're still invited.`));
guest4 = [];
console.log("Guest list:", guest4);
// Five places in the world you'd like to visit
let places = ['Paris', 'Sydney', 'Tokyo', 'New York', 'Cape Town'];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
console.log("Reversed order:", places.reverse());
console.log("Order after reversing again:", places.reverse());
places.sort();
console.log("Alphabetical order:", places);
places.sort().reverse();
console.log("Reverse alphabetical order:", places);
export {};
