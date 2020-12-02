class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    const evaluation = this.guess === this.card.correctAnswer ?
      true : false;
    return evaluation;
  }

  giveFeedback() {
    const evaluation = this.evaluateGuess();
    const feedback = evaluation === true ? 'Well done!' : 'No good.';
    return feedback;
  }
}

module.exports = Turn;