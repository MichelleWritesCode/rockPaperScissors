let getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Input is not correct, please choose \'paper\', \'rock\' or \'scissors\'.'); 
  }
}

let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
}

let determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'The game was a tie, try again.';
  } 

  if (userChoice === 'bomb') {
    return 'You have won!'
  }
  
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You have won!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You have won!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return 'You have won!';
    } else {
      return 'The computer won.';
    }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();






