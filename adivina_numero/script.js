let secretNumber;
let attemptsLeft;
let gameStarted = false;

function startGame() {
    const attempts = parseInt(document.getElementById('attempts').value);
    if (attempts < 1 || attempts > 10) {
        alert("Por favor, selecciona un número de intentos válido (1-10).");
        return;
    }
    attemptsLeft = attempts;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    gameStarted = true;
    document.getElementById('game').style.display = 'block';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('message').innerText = '';
}

function checkGuess() {
    if (!gameStarted) return;
    const guess = parseInt(document.getElementById('guess').value);
    if (guess < 1 || guess > 20) {
        alert("Por favor, ingresa un número válido (1-20).");
        return;
    }
    attemptsLeft--;
    if (guess === secretNumber) {
        document.getElementById('message').innerText = '¡Felicidades, ganaste!';
        endGame();
    } else if (attemptsLeft === 0) {
        document.getElementById('message').innerText = `¡Se acabaron los intentos! El número era ${secretNumber}.`;
        endGame();
    } else {
        document.getElementById('message').innerText = guess > secretNumber ? 'Muy alto' : 'Muy bajo';
    }
}

function endGame() {
    gameStarted = false;
    document.getElementById('reset').style.display = 'block';
}

function resetGame() {
    gameStarted = false;
    document.getElementById('game').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('message').innerText = '';
    document.getElementById('attempts').value = '';
}