const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, card4, deck, round;
  beforeEach(() => {
    card1 = new Card(3, 'What\'s the fastest animal on earth?', ['cheeta', 'sail fish', 'peregrine falcon'], 'peregrine falcon');
    card2 = new Card(8, 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?', ['dove', 'ruffed grouse', 'wild turkey'], 'wild turkey');
    card3 = new Card(10, 'What bird was woody the woodpecker modeled after?', ['pileated woodpecker', 'red-headed woodpecker', 'hairy woodpecker'], 'pileated woodpecker');
    card4 = new Card(44, 'What owl is known to say "Who cooks for you"?', ['short eared owl', 'barred owl', 'great horned owl'], 'barred owl');
    const cards = [card1, card2, card3, card4];
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should have a deck populated with cards', () => {
    expect(round.deck.cards).to.be.an('array');
    expect(round.deck.cards).to.have.lengthOf.above(1);
  });

  it('should have first card in deck as current card when instantiated', () => {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should return first card in deck as current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should keep a turn count', () => {
    expect(round.turnCount).to.equal(0);
  });

  it('should have a place to hold incorrect Guesses', () => {
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should update turn count when a user takes a turn', () => {
    round.takeTurn();
    expect(round.turnCount).to.equal(1);
    round.takeTurn();
    expect(round.turnCount).to.equal(2);
  })

  it('should create new instance of turn when guess is made', () => {
    const falcon = round.takeTurn('peregrine falcon');
    expect(falcon).to.be.an.instanceOf(Turn);
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