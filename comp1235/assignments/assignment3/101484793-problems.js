"use strict";

// Function 1: Circle Constructor
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.area = function () {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100; // Round to 2 decimal places
}

Circle.prototype.perimeter = function () {
    return Math.round(2 * Math.PI * this.radius * 100) / 100; // Round to 2 decimal places
}

// Function 2: Lucky Seven
const calculateSalary = (hoursWorked) => {
    const totalSalary = hoursWorked.reduce((acc, hours, index) => {
        const hourlyRate = index >= 5 ? 20 : 10; // Weekend rate is double
        const totalHours = hours > 8 ? 8 + (hours - 8) * 1.5 : hours; // Calculate total hours with overtime
        return acc + totalHours * hourlyRate;
    }, 0);
    return totalSalary;
}

// Function 3: Index Multiplier
const indexMultiplier = (array) => {
    return array.reduce((acc, num, index) => acc + (num * index), 0);
}

// Function 4: Filtered JSON
const filteredJSON = (data) => {
    return data.filter(item => item.id > 10 && /^[M-Z]/i.test(item.u));
}

// Function 5: Break Array
const breakAway = (array, n) => {
    const result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
}

// Exporting functions for testing purposes
module.exports = {
    Circle,
    calculateSalary,
    indexMultiplier,
    filteredJSON,
    breakAway
};