const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  beforeEach(() => {
    const card1 = new Card(3, 'What\'s the fastest animal on earth?', ['cheeta', 'sail fish', 'peregrine falcon'], 'peregrine falcon');
    const card2 = new Card(8, 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?', ['dove', 'ruffed grouse', 'wild turkey'], 'wild turkey');
    const card3 = new Card(10, 'What bird was woody the woodpecker modeled after?', ['pileated woodpecker', 'red-headed woodpecker', 'hairy woodpecker'], 'pileated woodpecker');
    const card4 = new Card(44, 'What owl is known to say "Who cooks for you"?', ['short eared owl', 'barred owl', 'great horned owl'], 'barred owl');
    const cards = [card1, card2, card3, card4];
    deck = new Deck(cards);
  })

  it('should initlize with array of Card objects', () => {
    expect(deck.cards).to.be.an('array');
    expect(deck.cards[1]).to.deep.equal({
      "id": 8,
      "question": "What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?",
      "answers": ['dove', 'ruffed grouse', 'wild turkey'],
      "correctAnswer": "wild turkey"
    })
  });

  it('should count how many cards there are', () => {
    expect(deck.countCards).to.be.a('function');
    expect(deck.countCards()).to.equal(4);
    expect(deck.cards).to.have.lengthOf(4);
    expect(deck.cards.length).to.equal(deck.countCards());
  })

})