"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('getFirstName', () =>  {
    it('Prints and Returns the first name from a full name',  () => {
        expect(getFirstName(username)).to.deep.equal("peter")
    })
})

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/