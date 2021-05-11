// This is my name
let myName = "Arthur";

//constant set to number of states
const numberOfStates = 50;

//adding 5 to 4 and storing the result
let result = 5 + 4;

function sayHello() {
    alert("Hello World");
}

sayHello();

//function to take name and age and if age is less than 21, alert a denial message
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


//for loop
let myFavVeggies = ["Broccoli", "Peas", "Carrot", "Radish", "Corn"];

for (let index = 0; index < myFavVeggies.length; index++) {
    console.log(myFavVeggies[index])
}


//object
let pet = {
    name: "Gio",
    breed: "Cat"
};

console.log(pet.name, pet.breed);


//make sure to remember the "," after each curly bracket
let people = [
    {
        name: "Josh",
        age: 27
    },
    {
        name: "Garrett",
        age: 22
    },
    {
        name: "Jake",
        age: 26
    },
    {
        name: "Benny",
        age: 3
    },
    {
        name: "Pete",
        age: 29
    }
];



for (let index = 0; index < people.length; index++) {
    checkAge(people[index].name, people[index].age);
}


function getLength(word) {
    return word.length;
}

let wordLength = getLength("Hello World");

if (wordLength % 2 == 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}
