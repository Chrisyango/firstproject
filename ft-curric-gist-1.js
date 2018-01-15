'use strict';

function whoAmI (name,age) {
    if (typeof name === 'undefined' || typeof age === 'undefined') {
        return console.log("Please enter name and age");
    } else if (typeof age !== 'number') {
        return console.log("Age must be a number type");
    } else if (typeof name !== 'string') {
        return console.log("Name must be a string");
    } else {
    birthYear(age);
    console.log(`Hello, my name is ${name} and I'm ${age} years old, I was born in ${birthYear(age)}`);
    };
};

function birthYear (age) {
    let yearOfBirth = 2017 - age;
        
    try {
        if (age < 0) throw e;
    }
        
    catch (e) {
        throw new Error ("Age cannot be a negative number");
    }
    return yearOfBirth;
}

whoAmI(23, "twenty-nine");
