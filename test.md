Description: Players();

Test: "It will create an object from the inputted player information"
Code: const participant = new Players("Mac", "33") > console.log(participant)
Expected Output: object {name: "Mac", age: "33", totalScore: 0, currentScore: 0}

Description: PigDiceGame()

Test: "It should add an inputted player to the PigDiceGame"
Code: const diceGame = new PigDiceGame(); > const player = new Players("Mac", "33"); > diceGame.addplayer(player); > console.log(PigDiceGame);
Expected Output: Object {name: "Mac", age: "33", totalScore: 0, currentScore: 0};

Description: rollDice();

Test: "It should return a random number between 1 and 6"
Code: rollDice(1);
Expected Output: a number between 1 and 6


<!-- Description: DestinationsList()

Test: "It should add inputted destination to the destination list." 
Code: >const destinationsList = new DestinationsList(); >const newDestination = new Destination("Utah", "Zion", "spring", "Beautiful"); >destinationsList.addDestination(newDestination); >console.log(DestinationsList) 
Expected Output: DestinationsList {destinations: location: "Utah", landmarks: "Zion", timeOfYear: "spring", notes: "Beautiful" } -->