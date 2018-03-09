'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import buzzer
const buzzer = require('../fizzBuzzer');

// unit tests for our `buzzer` function
describe('buzzer', function() {
  it('number is divisible by 15', function() {
    const normalCases = [
      {num: 45, expected: 'fizz-buzz'},
      {num: 60, expected: 'fizz-buzz'},
    ];
    normalCases.forEach(function(input) {
      const answer = buzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('number is divisible by 5', function() {
    const normalCases = [
      {num: 20, expected: 'buzz'},
      {num: 25, expected: 'buzz'},
    ];
    normalCases.forEach(function(input) {
      const answer = buzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('number is divisible by 3', function() {
    const normalCases = [
      {num: 12, expected: 'fizz'},
      {num: 24, expected: 'fizz'},
    ];
    normalCases.forEach(function(input) {
      const answer = buzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  //need test if number not multiple of 3 or 5

  it('if args are not numbers', function() {
    const badInputs = [
      ['num'],
      ['1'],
      [false]
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        buzzer(input);
      }).to.throw(Error);
    });
  });



});