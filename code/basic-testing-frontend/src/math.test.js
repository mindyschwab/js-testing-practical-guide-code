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
    // it should execute the function and pass is some arguments
    // assign this to a variable
    const result = add([1, 2, 3]);
    // it should then compare the result of the function to the expected result using the expect function
    // chain a method to the expect function (built into vitest) and the expected value
    // There are a lot of different methods that can be used with expect: https://vitest.dev/api/expect.html
    expect(result).toBe(6);
    // if the result is not what is expected, the test will fail
    // if the result is what is expected, the test will pass
});

