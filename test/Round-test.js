const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
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
    expect(round.turns).to.equal(0);
  });

  it('should have a place to hold incorrect Guesses', () => {
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should update turn count when a user takes a turn', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
  })

  it('should update current card to reflect next card in deck', () => {
    round.takeTurn('peregrine falcon');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn();
    expect(round.currentCard).to.equal(card3);
  });

  it('should store incorrect guesses', () => {
    round.takeTurn('peregrine falcon');
    expect(round.incorrectGuesses).to.have.lengthOf(0);
    round.takeTurn('dove');
    expect(round.incorrectGuesses).to.have.lengthOf(1);
    expect(round.incorrectGuesses).to.include(card2.id);
  });

  it('should give feedback on user\'s guess', () => {
    const round1 = round.takeTurn('peregrine falcon');
    const round2 = round.takeTurn('dove');
    expect(round1).to.equal('Well done!');
    expect(round2).to.equal('No good.');
  });

  it('should be able to calculate correct guesses and return percentile', () => {
    round.takeTurn('peregrine falcon');
    round.takeTurn('dove');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should tell user when round is over and their score', () => {
    round.takeTurn('peregrine falcon');
    round.takeTurn('dove');
    round.takeTurn('hairy woodpecker');
    round.takeTurn('barred owl');
    expect(round.endRound()).to.equal('**Round over!** You answered 50% of the questions correctly!');
  });

});