const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck = new Deck()) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    if (turn.guess !== this.currentCard.correctAnswer) this.incorrectGuesses.push(this.currentCard.id);

    this.turns += 1;
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const score = (this.incorrectGuesses.length / this.turns) * 100;
    return score;
  }

  endRound() {
    let score = this.calculatePercentCorrect();
    return `**Round over!** You answered ${score}% of the questions correctly!`;
  }
}

module.exports = Round;