function playerChoice() {
  let player = prompt("Enter Rock (r) Paper (p) or Scissors (s)?: ");
  if (player == "r") {
    alert("You have chosen ROCK!");
  } else if (player == "p") {
    alert("You have chosen PAPER!");
  } else {
    alert("You have chosen SCISSORS!");
  }
  return player;
}

function computerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  let computer = 0;

  if (random == 1) {
    alert("Computer has chosen ROCK!");
    computer = "r";
  } else if (random == 2) {
    alert("Computer has chosen PAPER!");
    computer = "p";
  } else {
    alert("Computer has chosen SCISSORS!");
    computer = "s";
  }
  return computer;
}

function whoWins(player, computer) {
  let result = 0;
  if (player == computer) {
    result = alert("It's a DRAW!");
  } else if (player == "r") {
    if (computer == "s") {
      result = alert("YOU WIN! :)");
    } else {
      result = alert("YOU LOSE! :(");
    }
  } else if (player == "p") {
    if (computer == "r") {
      result = alert("YOU WIN! :)");
    } else {
      result = alert("YOU LOSE! :(");
    }
  } else if (player == "s") {
    if (computer == "p") {
      result = alert("YOU WIN! :)");
    } else {
      result = alert("YOU LOSE! :(");
    }
  }
}

function playGame() {
  whoWins(playerChoice(), computerChoice());
}

playGame();
  