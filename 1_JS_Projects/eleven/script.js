let board = document.querySelector('.board');
let squares = document.querySelectorAll('.sqaure'); 
let message = document.querySelector('.message');

const players = ['X', 'O'];
let currentPlayer = players[0];

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 4, 8], [2, 4, 6], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8]
];

squares.forEach((square, i) => {
    square.addEventListener('click', () => {
        if (square.textContent !== '' || checkWin() || checkTieResult()) return;

        square.textContent = currentPlayer;

        if (checkWin()) {
            message.textContent = `Game Over! ${currentPlayer} Wins!`;
            return;
        }

        if (checkTieResult()) {
            message.textContent = `Game Over! It's a Tie.`;
            return;
        }

        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        message.textContent = `${currentPlayer}'s Turn`;
    });
});

function checkWin() {
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (squares[a].textContent === currentPlayer &&
            squares[b].textContent === currentPlayer &&
            squares[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkTieResult() {
    return [...squares].every(square => square.textContent !== '');
}

document.querySelector('.restart-btn').addEventListener('click', () => {
    squares.forEach(square => square.textContent = '');
    currentPlayer = players[0];
    message.textContent = `X's Turn`;
});
