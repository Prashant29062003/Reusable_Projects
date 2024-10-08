(function () {
    const message = document.querySelector(".message");
    const players = ["X","O"];
    let currentPlayer = players[0];
    const restartBtn = document.querySelector(".reset-btn");

    

  // creating squares for board
  function createSquares() {
    const board = document.querySelector(".board");
    for (let i = 0; i < 9; i++) {
        const divElement = document.createElement("div");
        divElement.classList.add("square");
        divElement.setAttribute("id", `square-${i}`);
        divElement.dataset.index = `square-${i}`;
        divElement.addEventListener("click",handleClick)
        board.appendChild(divElement);
    }
  }

    // handle clicking square
    function handleClick(e){
        if(e.target.textContent !== "" || checkWinner(currentPlayer)){
            return
        }
        e.target.textContent = currentPlayer;

        if(checkWinner(currentPlayer)){
                message.textContent = `Player ${currentPlayer} wins! Please Restart.`;
                return
        }
        if(checkTieResult()){
            message.textContent = `It's a tie! Please Restart.`
        }
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];


        if(currentPlayer === players[0]){
            message.textContent = `Now it's ${currentPlayer}'s Turn.`
        }else{
            message.textContent = `Now it's ${currentPlayer}'s Turn.`
        }
    }
  
    function checkWinner(currentPlayer){
        const winningPatterns = [
            [0,1,2], [3,4,5], [6,7,8], // rows
            [0,3,6], [1,4,7], [2,5,8], // columns
            [0,4,8], [2,4,6 ]           // digonals
        ]
        const squares = document.querySelectorAll(".square");
        
        for(let combinations of winningPatterns){
            const [a,b,c] = combinations;

            if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
                return true
            }
        }
        return false
    }

    function checkTieResult(){
        const squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
            if(squares[i].textContent === ""){
                return false
            }
        }
        return true
    }

    function restartGame(){
        const squares = document.querySelectorAll(".square");
        for(let i = 0; i< squares.length;i++){
            squares[i].textContent = "";
        }
        message.textContent = `X's turn`;
        currentPlayer = players[0];
    }
    restartBtn.addEventListener("click",restartGame);

  function main() {
    createSquares();
  }
  main();
})();
