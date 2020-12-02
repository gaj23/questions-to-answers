const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Card');

describe('Turn', function() {
  let turn;
  beforeEach(() => {
    return turn = new Turn();
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store the user\'s guess', () => {
    turn.guess = 'banana';

    expect(turn.guess).to.equal('banana');
  })

  it.skip('should have current card as an object instance of Card', () => {
    //is the object instance contain the correct data? is it deep.equal?
  })

  it.skip('should return a guess', () => {
    //does method exist
    //does it return what's needed
  })

  it.skip('should return a card', () => {
    //does method exists
    //does it return a card
  })

  it.skip('should evaluate if user\'s guess matches card\'s correct answer', () => {
    //does method exist
    //does it return true if the answer is correct?
    //does it return false if the answer is incorrect?
  })

  it.skip('should give user feedback based on their answer', () => {
    //does method exist
    //if evaluated to true, feedback should be correct
    //if evaluated to false, feedback should be incorrect

  })
})