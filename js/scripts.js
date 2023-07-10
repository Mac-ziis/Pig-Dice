document.addEventListener("DOMContentLoaded", function() {
  // Game logic for Pig Dice
  function PigDiceGame() {
    this.players = {};
    this.currentPlayerId = null;
    this.isGameOver = false;
  }

  PigDiceGame.prototype.addPlayer = function(player) {
    player.id = this.assignPlayerId();
    this.players[player.id] = player;
  };

  PigDiceGame.prototype.assignPlayerId = function() {
    this.currentPlayerId += 1;
    return this.currentPlayerId;
  };

  PigDiceGame.prototype.switchTurn = function() {
    const playerIds = Object.keys(this.players);
    const currentPlayerIndex = playerIds.indexOf(this.currentPlayerId.toString());

    if (currentPlayerIndex !== -1) {
      const nextPlayerIndex = (currentPlayerIndex + 1) % playerIds.length;
      this.currentPlayerId = playerIds[nextPlayerIndex];
    }
  };

  PigDiceGame.prototype.checkWinCondition = function() {
    const player = this.players[this.currentPlayerId];
    return player.totalScore >= 100;
  };

  // Player object
  function Player(name) {
    this.name = name;
    this.totalScore = 0;
    this.currentScore = 0;
  }

  Player.prototype.rollDice = function() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
      this.currentScore = 0;
    } else {
      this.currentScore += diceValue;
    }
    return diceValue;
  };

  Player.prototype.hold = function() {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
  };

  // UI Logic
  const form1 = document.querySelector("form#new-player-1");
  form1.addEventListener("submit", handleFormSubmission);

  const form2 = document.querySelector("form#new-player-2");
  form2.addEventListener("submit", handleFormSubmission);

  const rollBtn = document.getElementById("roll-btn");
  rollBtn.addEventListener("click", handleRollButtonClick);

  const holdBtn = document.getElementById("hold-btn");
  holdBtn.addEventListener("click", handleHoldButtonClick);

  const game = new PigDiceGame();

  function handleFormSubmission(event) {
    event.preventDefault();
    const playerName = event.target.querySelector("input").value;
    const newPlayer = new Player(playerName);
    game.addPlayer(newPlayer);
    updateUI();
    event.target.reset();
  }

  function handleRollButtonClick() {
    if (game.isGameOver) {
      showMessage("Game over! Please start a new game.");
      return;
    }

    const currentPlayer = game.players[game.currentPlayerId];
    const diceValue = currentPlayer.rollDice();

    if (diceValue === 1) {
      showMessage(`${currentPlayer.name} rolled a 1. Turn ends.`);
    } else {
      showMessage(`${currentPlayer.name} rolled a ${diceValue}. Current score: ${currentPlayer.currentScore}`);
    }

    if (game.checkWinCondition()) {
      showMessage(`${currentPlayer.name} wins with a total score of ${currentPlayer.totalScore}!`);
      game.isGameOver = true;
    }

    updateUI();
  }

  function handleHoldButtonClick() {
    if (game.isGameOver) {
      showMessage("Game over! Please start a new game.");
      return;
    }

    const currentPlayer = game.players[game.currentPlayerId];
    currentPlayer.hold();

    if (game.checkWinCondition()) {
      showMessage(`${currentPlayer.name} wins with a total score of ${currentPlayer.totalScore}!`);
      game.isGameOver = true;
    } else {
      game.switchTurn();
    }

    updateUI();
  }

  function updateUI() {
    const player1CurrentScore = document.getElementById("player1-current");
    const player1TotalScore = document.getElementById("player1-total");
    const player2CurrentScore = document.getElementById("player2-current");
    const player2TotalScore = document.getElementById("player2-total");

    const player1 = game.players[1];
    const player2 = game.players[2];

    if (player1) {
      player1CurrentScore.textContent = player1.currentScore;
      player1TotalScore.textContent = player1.totalScore;
    }
  
    if (player2) {
      player2CurrentScore.textContent = player2.currentScore;
      player2TotalScore.textContent = player2.totalScore;
    }
  }

  function showMessage(message) {
    const messageElem = document.getElementById("message");
    messageElem.textContent = message;
  }
});
