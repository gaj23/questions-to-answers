const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

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

  it('should have current card as an object instance of Card', () => {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    turn.card = currentCard;

    expect(turn.card).to.be.an('object');
    expect(turn.card).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  })

  it('should return a guess', () => {
    turn.guess = 'banana';
    let returnedGuess = turn.returnGuess();

    expect(turn.returnGuess).to.be.a('function');
    expect(returnedGuess).to.equal('banana');
    expect(returnedGuess).to.equal(turn.guess);
  })

  it('should return a card', () => {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn.card = currentCard;
    let returnedCard = turn.returnCard();

    expect(turn.returnCard).to.be.a('function');
    expect(returnedCard).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  })

  it('should evaluate if user\'s guess matches card\'s correct answer', () => {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const truthyTurn = new Turn('object', currentCard);
    const falsyTurn = new Turn('array', currentCard);
    const trueTurn = truthyTurn.evaluateGuess();
    const falseTurn = falsyTurn.evaluateGuess();

    expect(truthyTurn.evaluateGuess).to.be.a('function');
    expect(falsyTurn.evaluateGuess).to.be.a('function');

    expect(trueTurn).to.equal(true);
    expect(falseTurn).to.equal(false);
  })

  it.skip('should give user feedback based on their answer', () => {
    //does method exist
    //if evaluated to true, feedback should be correct
    //if evaluated to false, feedback should be incorrect

  })
})