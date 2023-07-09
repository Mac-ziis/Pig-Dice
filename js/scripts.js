// business logic
function PigDiceGame() {
  this.players = {};
  this.currentPlayerId = 0;
  // this.isGameOver = false;
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
  return this.player.totalScore >= 100;
};

// player object
function Players(name, age) {
  this.name = name;
  this.age = age;
  this.totalScore = 0;
  this.currentScore = 0;
}

Players.prototype.rollDice = function() {
  const diceValue = Math.floor(Math.random() * 6) +1;
  if (diceValue === 1) {
    this.currentScore = 0;
  } else {
    this.currentScore += diceValue;
  } 
  return diceValue;
};

Players.prototype.hold = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
};

// UI logic
window.addEventListener("load", function() {
  const form1 = document.querySelector("form#new-player-1");
  form1.addEventListener("submit", handleFormSubmission);

  const form2 = document.querySelector("form#new-player-2");
  form2.addEventListener("submit", handleFormSubmission);

  const rollBtn = document.getElementById("")
})