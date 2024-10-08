(function () {
    const message = document.querySelector(".message");
    const players = ["X", "O"];
    let currentPlayer = players[0];
    const restartBtn = document.querySelector(".reset-btn");

    function createSquares() {
        const board = document.querySelector(".board");
        for (let i = 0; i < 9; i++) {
            const divElement = document.createElement("div");
            divElement.classList.add("square");
            divElement.setAttribute("id", `square-${i}`);
            divElement.dataset.index = i;
            divElement.addEventListener("click", handleClick);
            board.appendChild(divElement);
        }
    }

    function handleClick(e) {
        if (e.target.textContent !== "" || checkWinner(currentPlayer)) {
            return;
        }
        e.target.textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            if(currentPlayer === players[0]){
                message.style.backgroundColor = "blue";
                message.style.color = "white";
            }else{
                message.style.backgroundColor = "purple";
                message.style.color = "white";
            }
            message.textContent = `Player ${currentPlayer} wins! Please Restart.`;
            return;
        }
        if (checkTieResult()) {
            message.style.backgroundColor = "yellow";
            message.style.color = "black";
            message.textContent = `It's a tie! Please Restart.`;
            return;
        }

        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        message.textContent = `Now it's ${currentPlayer}'s turn.`;

        // If it's AI's turn, trigger the AI move
        if (currentPlayer === "O") {
            setTimeout(aiMove, 500); // AI moves after a short delay
        }
    }

    function aiMove() {
        const availableSquares = [];
        const squares = document.querySelectorAll(".square");

        squares.forEach(square => {
            if (square.textContent === "") {
                availableSquares.push(square);
            }
        });

        // Randomly pick one of the available squares
        if (availableSquares.length > 0) {
            const randomSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
            randomSquare.textContent = currentPlayer;

            if (checkWinner(currentPlayer)) {
                message.textContent = `Player ${currentPlayer} wins! Please Restart.`;
                return;
            }
            if (checkTieResult()) {
                message.textContent = `It's a tie! Please Restart.`;
                return;
            }

            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
            message.textContent = `Now it's ${currentPlayer}'s turn.`;
        }
    }

    function checkWinner(currentPlayer) {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]  // Diagonals
        ];
        const squares = document.querySelectorAll(".square");

        for (let combinations of winningPatterns) {
            const [a, b, c] = combinations;
            if (squares[a].textContent === currentPlayer &&
                squares[b].textContent === currentPlayer &&
                squares[c].textContent === currentPlayer) {
                return true;
            }
        }
        return false;
    }

    function checkTieResult() {
        const squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].textContent === "") {
                return false;
            }
        }
        return true;
    }

    function restartGame() {
        const squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
        }
        message.textContent = `X's turn`;
        currentPlayer = players[0];
    }

    restartBtn.addEventListener("click", restartGame);

    function main() {
        createSquares();
    }
    main();
})();
