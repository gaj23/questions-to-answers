const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(8, 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?', ['dove', 'ruffed grouse', 'wild turkey'], 'wild turkey');
    turn = new Turn('wild turkey', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store the user\'s guess', () => {
    expect(turn.guess).to.equal('wild turkey');
    turn.guess = 'banana';
    expect(turn.guess).to.equal('banana');
  })

  it('should have current card as an object instance of Card', () => {

    expect(turn.card).to.be.an('object');
    expect(turn.card).to.deep.equal({
      'id': 8,
      'question': 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?',
      'answers': ['dove', 'ruffed grouse', 'wild turkey'],
      'correctAnswer': 'wild turkey'
    });
  })

  it('should return a guess', () => {
    const returnedGuess = turn.returnGuess();

    expect(turn.returnGuess).to.be.a('function');
    expect(returnedGuess).to.equal('wild turkey');
    expect(returnedGuess).to.equal(turn.guess);
  })

  it('should return a card', () => {
    let returnedCard = turn.returnCard();

    expect(turn.returnCard).to.be.a('function');
    expect(returnedCard).to.deep.equal({
      'id': 8,
      'question': 'What bird did Benjamin Franklin originally suggest to be the US\'s national symbol?',
      'answers': ['dove', 'ruffed grouse', 'wild turkey'],
      'correctAnswer': 'wild turkey'
    });
  })

  it('should evaluate if user\'s guess matches card\'s correct answer', () => {
    const truthyTurn = new Turn('wild turkey', card);
    const falsyTurn = new Turn('dove', card);
    const trueTurn = truthyTurn.evaluateGuess();
    const falseTurn = falsyTurn.evaluateGuess();

    expect(truthyTurn.evaluateGuess).to.be.a('function');
    expect(falsyTurn.evaluateGuess).to.be.a('function');

    expect(trueTurn).to.equal(true);
    expect(falseTurn).to.equal(false);
  });

  it('should give user feedback based on their answer', () => {
    const truthyTurn = new Turn('wild turkey', card);
    const falsyTurn = new Turn('dove', card);
    const trueTurn = truthyTurn.giveFeedback();
    const falseTurn = falsyTurn.giveFeedback();

    expect(truthyTurn.giveFeedback).to.be.a('function');
    expect(falsyTurn.giveFeedback).to.be.a('function');

    expect(trueTurn).to.equal('Well done!');
    expect(falseTurn).to.equal('No good.');
  });
});