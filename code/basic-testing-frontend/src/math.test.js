// vitest uses this naming conversion to find the test files and execute them using the test rummer
// vitest does allow insource testing (adding the test in the same file as the unit code), but Jest doesn't offer this feature

// use the "test" or "it" keyword to define a test. These are both functions
// it is the common convention to use "it" instead of "test"
// import { test } from 'vitest';
// expect is used for vitest and jest to compare the result of a function to the expected result
import { it, expect } from 'vitest';
// import the function that we want to test
import { add } from './math.js';

// passing in a string that briefly describes the test
// second argument is a function that contains the test code
it('should summarize all number values in an array', () => {
    // Arrange phase
    // define variable that will be passed into the function
    const numbers = [1, 2, 3];
    // it should execute the function and pass is some arguments
    // assign this to a variable

    // Act phase
    const result = add(numbers);
    // it should then compare the result of the function to the expected result using the expect function
    // chain a method to the expect function (built into vitest) and the expected value
    // There are a lot of different methods that can be used with expect: https://vitest.dev/api/expect.html

    // Assert phase
    // define the expected result programmatically, so that it is not hard coded
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );
    expect(result).toBe(expectedResult);
    // if the result is not what is expected, the test will fail
    // if the result is what is expected, the test will pass
});

// all tests are executed when running npm test - executes the test runner
//  Results from terminal 
    //  RUN  v0.9.0 / Users / mindy / code / JS - Unit - Testing_Udemy / js - testing - practical - guide - code / code / basic - testing - frontend

    //  √ src / math.test.js(1)
    //    √ should summarize all number values in an array

    // Test Files  1 passed(1)
    //      Tests  1 passed(1)
    //       Time  2.95s(in thread 5ms, 59081.38 %)

// running npm run test:watch will run the test runner in watch mode
// tests will be automatically executed when the code changes

// Failed test example:
    // ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

    // FAIL  src / math.test.js > should summarize all number values in an array
    // AssertionError: expected 6 to be 5 // Object.is equality
    // ❯ src / math.test.js: 21: 20
    // 19 |     // chain a method to the expect function (built into vitest) and the expected value
    //     20 |     // There are a lot of different methods that can be used with expect: https://vitest.dev/api/expect.html
    //     21 | expect(result).toBe(5);
    //     |                    ^
    //     22 |     // if the result is not what is expected, the test will fail
    //     23 |     // if the result is what is expected, the test will pass

    //     - Expected   5
    //         + Received   6

    // ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1 / 1]⎯

    // Test Files  1 failed(1)
    //     Tests  1 failed(1)
    //     Time  4.33s(in thread 15ms, 28887.96 %)
