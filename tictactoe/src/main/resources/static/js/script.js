const cells = document.querySelectorAll('[data-cell]');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restartButton');

let isXTurn = true;

function startGame() {
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
    statusText.textContent = "Player X's Turn";
    isXTurn = true;
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = isXTurn ? 'x' : 'o';
    cell.classList.add(currentClass);
    cell.textContent = currentClass.toUpperCase();

    if (checkWin(currentClass)) {
        statusText.textContent = `Player ${currentClass.toUpperCase()} Wins!`;
        endGame();
    } else if (isDraw()) {
        statusText.textContent = "It's a Draw!";
        endGame();
    } else {
        isXTurn = !isXTurn;
        statusText.textContent = `Player ${isXTurn ? 'X' : 'O'}'s Turn`;
    }
}

function checkWin(currentClass) {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winCombos.some(combo =>
        combo.every(index =>
            cells[index].classList.contains(currentClass)
        )
    );
}

function isDraw() {
    return [...cells].every(cell =>
        cell.classList.contains('x') || cell.classList.contains('o')
    );
}

function endGame() {
    cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

restartButton.addEventListener('click', startGame);
startGame();
