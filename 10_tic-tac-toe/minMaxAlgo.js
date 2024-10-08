(function () {
    const message = document.querySelector(".message");
    const players = ["X", "O"];
    let currentPlayer = players[0];
    const restartBtn = document.querySelector(".reset-btn");

    // Create squares for board
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

    // Handle player clicks
    function handleClick(e) {
        if (e.target.textContent !== "" || checkWinner(currentPlayer)) {
            return;
        }
        e.target.textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            displayWinnerMessage(currentPlayer);
            return;
        }
        if (checkTieResult()) {
            message.textContent = `It's a tie! Please Restart.`;
            return;
        }

        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        message.textContent = `Now it's ${currentPlayer}'s turn.`;

        // Trigger AI move if it's AI's turn
        if (currentPlayer === "O") {
            setTimeout(aiMoveWithMinimax, 500); // AI moves after a short delay
        }
    }

    // Check if the current player has won
    function checkWinner(currentPlayer) {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        const squares = document.querySelectorAll(".square");

        for (let combination of winningPatterns) {
            const [a, b, c] = combination;
            if (
                squares[a].textContent === currentPlayer &&
                squares[b].textContent === currentPlayer &&
                squares[c].textContent === currentPlayer
            ) {
                return true;
            }
        }
        return false;
    }

    // Check if the game ends in a tie
    function checkTieResult() {
        const squares = document.querySelectorAll(".square");
        for (let square of squares) {
            if (square.textContent === "") {
                return false;
            }
        }
        return true;
    }

    // Display the winning message
    function displayWinnerMessage(winner) {
        if (winner === players[0]) {
            message.style.backgroundColor = "blue";
        } else {
            message.style.backgroundColor = "purple";
        }
        message.style.color = "white";
        message.textContent = `Player ${winner} wins! Please Restart.`;
    }

    // AI move using Minimax
    function aiMoveWithMinimax() {
        const squares = document.querySelectorAll(".square");
        const board = Array.from(squares).map(sq => sq.textContent);
        let bestScore = Infinity;
        let move;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "O"; // Simulate AI move
                const score = minimax(board, 0, true);
                board[i] = ""; // Undo move
                if (score < bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }

        // Make the best move for AI
        squares[move].textContent = "O";

        if (checkWinner("O")) {
            displayWinnerMessage("O");
            return;
        }
        if (checkTieResult()) {
            message.textContent = `It's a tie! Please Restart.`;
            return;
        }

        currentPlayer = players[0];
        message.textContent = `Now it's ${currentPlayer}'s turn.`;
    }

    // Minimax algorithm for AI decision-making
    function minimax(board, depth, isMaximizingPlayer) {
        const result = checkWinnerForMinimax(board);
        if (result !== null) {
            const scores = { X: 1, O: -1, tie: 0 };
            return scores[result];
        }

        if (isMaximizingPlayer) {
            let bestScore = -Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === "") {
                    board[i] = "X"; // Simulate X move
                    const score = minimax(board, depth + 1, false);
                    board[i] = ""; // Undo move
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === "") {
                    board[i] = "O"; // Simulate O move
                    const score = minimax(board, depth + 1, true);
                    board[i] = ""; // Undo move
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    // Utility function for Minimax to check the board result
    function checkWinnerForMinimax(board) {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let combination of winningPatterns) {
            const [a, b, c] = combination;
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        // Check for tie
        if (board.every(square => square !== "")) {
            return "tie";
        }

        return null;
    }

    // Restart the game
    function restartGame() {
        const squares = document.querySelectorAll(".square");
        for (let square of squares) {
            square.textContent = "";
        }
        message.style.backgroundColor = "transparent";
        message.textContent = `X's turn.`;
        currentPlayer = players[0];
    }

    restartBtn.addEventListener("click", restartGame);

    function main() {
        createSquares();
    }
    main();
})();
