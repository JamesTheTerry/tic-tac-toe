var inquirer = require('inquirer');
var _ = require('lodash');

var b = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
var currentTurn = 'X';
var gameOver = false;

var checkForWinner = function() {
  for (var i = 0; i < b.length; i++) {
    if (_.every(b[i], 'X')) {
      console.log('X wins');
      gameOver = true;
      return;
    } else if (_.every(b[i], 'X')) {
      console.log('O wins');
      gameOver = true;
      return;
    }
  }
}

var getRowString = function(row) {
  var fullRow = '';
  fullRow += '   |   |   ' + '\n';
  fullRow += ` ${row[0]} | ${row[1]} | ${row[2]}`
  return fullRow;
}

var displayB = function() {
  var seperator = '\n___|___|___\n';
  console.log(getRowString(b[0]) + seperator + getRowString(b[1]) + seperator + getRowString(b[2]) + '\n   |   |   ');
}

var addToBoard = function(row, col) {
  if (b[row][col] === ' ') {
    b[row][col] = currentTurn;
    return true;
  } else {
    return false;
  }
}

var enterMove = function(row, col) {
  if (addToBoard(row, col)) {
    if (currentTurn === 'X') {
      currentTurn = 'O';
    } else {
      currentTurn = 'X';
    }
    displayB();
    checkForWinner();
    if (!gameOver) {
      movePrompt();
    } else {
      console.log('Game Over');
    }
  } else {
    // Invalid Move
    console.log('Invalid Move');
    movePrompt();
  }
}

var movePrompt = function() {
  var questions = [
    {
      type: 'input',
      name: 'moveLocation',
      message: `${currentTurn}: Where do you want to go? Enter row, col`,
      default: undefined
    }
  ];
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    if (answers.moveLocation.length < 4) {
      console.log('Invalid Prompt');
      movePrompt();
    }
    enterMove(parseInt(answers.moveLocation[0]), parseInt(answers.moveLocation[3]));
  });
}

console.log('Welcome to Tic-Tac-Toe');
displayB();
movePrompt();
