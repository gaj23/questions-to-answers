const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  beforeEach(() => {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const card4 = new Card();
    const cards = [card1, card2, card3, card4];
    return deck = new Deck(cards);
  })

  it.skip('should initlize with array of Card objects', () => {
    //deck.cards to.be.an array
  });

  it.skip('should count how many cards there are', () => {
    //is countCards a method?
    //what is the length?
    //does it return a length?
  })

})