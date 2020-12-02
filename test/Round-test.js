const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be an object instance of Round', () => {
    //is round an instanceof Round

  });

  it.skip('should return current card in play', () => {
    //is returnCurrentCard a method
    //does it return an object
    //is that object equal to an object in cards array of deck
  });

  it.skip('should contain takeTurn method', () => {
    //is it a method
  });


  it.skip('should create new instance of turn when guess is made', () => {
    //does takeTurn create a new Turn
    //try more than once
    //combined top & bottom
  });

  it.skip('should have current card as the first card in the deck when turn count is 0', () => {
    //??? needed?
    //does currentCard deep equal desk.cards[0]?
  });

  it.skip('should update turn count', () => {
    //does turn count update x amount of times when takeTurn is called
    //try multiple times with expects following
  });

  it.skip('should update current card to reflect next card in deck', () => {
    //when turn happens, does the current card match the next card in the deck.cards array?
    //try more than once
  });

  it.skip('should record and evaluate guess', () => {
    //does it return correct or incorrect? (use turn method)
  });

  it.skip('should store incorrect guesses', () => {
    //is there an array for incorrect guesses
    //when takeTurn is called and it's an incorrect guess, is the array populated?
    //when takeTurn is called and it's correct is the array not populated?
    //does it store the card id only?

  });

  it.skip('should return feedback', () => {
    //use turn method to get feedback
  });

  it.skip('should be able to calculate correct guesses and return percentile', () => {
    //is it a method?
    //do I get the right percentile based on correct guesses
    //takeTurn fires with correct and incorrect answers
    //
  });

  it.skip('should tell user when round is over', () => {

  });

  it.skip('should tell user percentile of correct answers at end of round', () => {

  });

});