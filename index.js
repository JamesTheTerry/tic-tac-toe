var inquirer = require('inquirer');

var b = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

var getRowString = function(row) {
  var fullRow = '';
  fullRow += '   |   |   ' + '\n';
  fullRow += ` ${row[0]} | ${row[1]} | ${row[2]}`
  return fullRow;
}

var displayb = function() {
  var seperator = '\n___|___|___\n';
  console.log(getRowString(b[0]) + seperator + getRowString(b[1]) + seperator + getRowString(b[2]));
}

var currentTurn = 'X';
var enterMove = function(row, col) => {
  if (b[row][col] === ' ') {
    b[row][col] = currentTurn;
  }

  if (currentTurn === 'X') {
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }
}

console.log('Welcome to Tic-Tac-Toe');
displayb();
