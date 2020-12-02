const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;
  beforeEach(() => {
    card = new Card(8, 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?', ['dove', 'ruffed grouse', 'wild turkey'], 'wild turkey');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['dove', 'ruffed grouse', 'wild turkey']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('wild turkey');
  });
});