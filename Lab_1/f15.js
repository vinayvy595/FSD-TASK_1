class Game {
    constructor() {
        this.resetGame();
    }

    resetGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        console.log("A new game has started! Guess a number between 1 and 100.");
    }

    checkGuess(guess) {
        this.attempts++;
        if (guess === this.targetNumber) {
            console.log(`Congratulations! You've guessed the number ${this.targetNumber} in ${this.attempts} attempts.`);
            this.resetGame();
        } else if (guess < this.targetNumber) {
            console.log("Higher! Try again.");
        } else {
            console.log("Lower! Try again.");
        }
    }
}

const game = new Game();

game.checkGuess(50);
game.checkGuess(75);
game.checkGuess(60);
game.checkGuess(65);
