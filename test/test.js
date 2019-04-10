var expect = require('chai').expect;

class SimpleCalc {
  add(a, b) {
    return a + b;
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
      let calc = new SimpleCalc();

      // act
      let result = calc.add(1, 2);

      // assert
      expect(result).to.equal(3);
    });
  });
});
