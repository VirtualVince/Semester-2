"use strict";
// This is nearly function 3 in assignment 3
// Define an arrow function called "calculateAge"
// it takes an argument of type array that contains many ages
// return sum of all the ages
const calculateAge = (ages) => {
    let initialVal = 0;
    // Which array method should be used?
    let sumOfAges = ages.reduce((accumulator, age, currentIndex) => {
        console.log("The current index is:" + currentIndex)
        // sum all the ages
        return accumulator + currentVal
    }, initialVal);
    return sumOfAges
}

// Call the function above
const sumOfAges = calculateAge([10, 39, 51, 15]);
