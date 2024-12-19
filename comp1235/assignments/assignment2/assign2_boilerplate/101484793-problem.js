"use strict";

function _checkS(password) {
    // Function 1: Find the Number of Digits in an Argument
    function _findNumOfDigits(arg) {
        if (typeof arg === 'number') {
            return String(arg).replace(/[^0-9]/g, '').length;
        } else if (typeof arg === 'string') {
            return arg.replace(/[^0-9]/g, '').length;
        } else {
            return 0;
        }
    }

    // Function 2: Surplus Function
    function _surplus(str) {
        return function inner() {
            return str;
        }
    }

    // Function 3: Strings with Numbers
    function _strNumbers(array) {
        return array.filter(str => /\d/.test(str));
    }

    // Function 4: Class Grading
    function _determineClassGrading(array) {
        let passing = array.filter(grade => grade >= 50).length;
        let failing = array.length - passing;
        let average = array.reduce((total, grade) => total + grade, 0) / array.length;
        average = Math.round(average * 10) / 10; // rounding to 1 decimal point
        console.log(`Passing: ${passing}, Failing: ${failing}, Average: ${average}`);
        return [passing, failing, average];
    }

    // Function 5: Move Capital Letters
    const _moveCapitalLetters = (str) => {
        let capital = '';
        let lowercase = '';
        for (let char of str) {
            if (char === char.toUpperCase()) {
                capital += char;
            } else {
                lowercase += char;
            }
        }
        return capital + lowercase;
    }

    // Test cases
    console.log(_findNumOfDigits(1000)); // 4
    console.log(_findNumOfDigits("abcd")); // 0
    console.log(_findNumOfDigits(12)); // 2
    console.log(_findNumOfDigits("COMP1235")); // 4
    console.log(_findNumOfDigits(0)); // 1
    console.log(_findNumOfDigits("C1O2M3P5")); // 4

    const inner = _surplus("orange");
    console.log(inner()); // orange

    console.log(_strNumbers(["1a", "a", "2b", "b"])); // ["1a", "2b"]
    console.log(_strNumbers(["abc", "abc10"])); // ["abc10"]
    console.log(_strNumbers(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]
    console.log(_strNumbers(["this is a test", "test1"])); // ["test1"]

    console.log(_determineClassGrading([50, 51, 80, 45])); // [3, 1, 56.5]
    console.log(_determineClassGrading([35, 45, 25, 10, 6, 33])); // [0, 6, 25.7]
    console.log(_determineClassGrading([80, 90])); // [2, 0, 85.0]

    console.log(_moveCapitalLetters("hApPy")); // "APhpy"
    console.log(_moveCapitalLetters("moveMENT")); // "MENTmove"
    console.log(_moveCapitalLetters("shOrtCAKE")); // "OCAKEshrt"

}
