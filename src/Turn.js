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
    let evaluation = this.guess === this.card.correctAnswer ?
      true : false;
    return evaluation;
  }

  giveFeedback() {
    const evaluation = this.evaluateGuess();
    let feedback = evaluation === true ? 'Well done!' : 'No good.';
    return feedback;
  }
}

module.exports = Turn;