"use strict";

const chai = window.chai;
const expect = chai.expect;

const {
    Circle,
    calculateSalary,
    indexMultiplier,
    filteredJSON,
    breakAway
} = require('./problems');

// Function 1: Circle Constructor
describe('Circle Constructor', () => {
    test('Area and Perimeter calculation', () => {
        const circle1 = new Circle(3);
        expect(circle1.area()).toBeCloseTo(28.27);
        expect(circle1.perimeter()).toBeCloseTo(18.85);

        const circle2 = new Circle(7);
        expect(circle2.area()).toBeCloseTo(153.94);
        expect(circle2.perimeter()).toBeCloseTo(43.98);

        const circle3 = new Circle(9);
        expect(circle3.area()).toBeCloseTo(254.47);
        expect(circle3.perimeter()).toBeCloseTo(56.55);
    });
});

// Function 2: Lucky Seven
describe('Lucky Seven', () => {
    test('Calculate Salary', () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 0, 0])).toBe(400);
        expect(calculateSalary([10, 10, 10, 0, 8, 0, 0])).toBe(410);
        expect(calculateSalary([0, 0, 0, 0, 0, 12, 0])).toBe(280);
    });
});

// Function 3: Index Multiplier
describe('Index Multiplier', () => {
    test('Index Multiplier', () => {
        expect(indexMultiplier([1, 2, 3, 4, 5])).toBe(40);
        expect(indexMultiplier([-3, 0, 8, -6])).toBe(-2);
        expect(indexMultiplier([15, 16, -100, 50])).toBe(-34);
    });
});

// Function 4: Filtered JSON
describe('Filtered JSON', () => {
    test('Filter JSON', () => {
        const inputArray = [
            { id: 1, u: "batman" },
            { id: 11, u: "spidey" }
        ];
        expect(filteredJSON(inputArray)).toEqual([{ id: 11, u: "spidey" }]);
    });
});

// Function 5: Break Array
describe('Break Array', () => {
    test('Break Array into Chunks', () => {
        expect(breakAway([2, 3, 4, 5], 2)).toEqual([[2, 3], [4, 5]]);
        expect(breakAway([2, 3, 4, 5, 6], 2)).toEqual([[2, 3], [4, 5], [6]]);
        expect(breakAway([2, 3, 4, 5, 6, 7], 3)).toEqual([[2, 3, 4], [5, 6, 7]]);
        expect(breakAway([2, 3, 4, 5], 1)).toEqual([[2], [3], [4], [5]]);
        expect(breakAway([2, 3, 4, 5, 6, 7], 7)).toEqual([[2, 3, 4, 5, 6, 7]]);
    });
});
