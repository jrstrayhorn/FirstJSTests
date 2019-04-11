var expect = require('chai').expect;
var assert = require('assert');

describe('Basic Mocha String Test', () => {
  it('should return number of characters in a string', () => assert.equal('Hello'.length, 5));
  it('should return first character of the string', () => assert.equal('Hello'.charAt(0), 'H'));
});

class SimpleCalc {
  constructor(value) {
    this._startingPoint = value || 0;
  }

  add(value) {
    return new SimpleCalc(this._startingPoint + value);
  }

  get result() {
    return this._startingPoint;
  }

  subtract(value) {
    return new SimpleCalc(this._startingPoint - value);
  }
}

describe('Simple Calculator', () => {
  'use strict';

  it('exists', () => {
    // arrange
    // act
    // assert
    expect(SimpleCalc).to.exist;
  });

  describe('add function', () => {
    it('exists', () => {
      // arrange
      let calc;

      // act
      calc = new SimpleCalc();

      // assert
      expect(calc.add).to.exist;
    });

    it('adds two numbers', () => {
      // arrange
      let calc = new SimpleCalc(1);

      // act
      let result = calc.add(2).result;

      // assert
      expect(result).to.equal(3);
    });
  });

  describe('subtract function', () => {
    it('exists', () => {
      // arrange
      let calc;

      // act
      calc = new SimpleCalc();

      // assert
      expect(calc.subtract).to.exist;
    });

    it('subtracts two numbers', () => {
      // arrange
      let calc = new SimpleCalc(3);

      // act
      let result = calc.subtract(2).result;

      // assert
      expect(result).to.equal(1);
    });
  });

  describe('chaining functions', () => {
    it('adds and subtracts chained', () => {
      // arrange
      let calc = new SimpleCalc(5);

      // act
      let result = calc.add(3).subtract(4).result;

      // assert
      expect(result).to.equal(4);
    });
  });
});
