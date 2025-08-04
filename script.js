let currentPlayer = "X";
let arr = Array(9).fill(null);
let game = true;

let result = document.getElementById("result");

function checkWinner() {
    if ((arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        result.innerHTML = `<p>Winner is ${currentPlayer}</p>`
        game = false;
        return true;
    }
}

function handleClick(element) {
    if (!game) return;
    let id = Number(element.id);

    if (arr[id] !== null) return;
    
    arr[id] = currentPlayer;
    element.innerText = `${currentPlayer}`;

    checkWinner();

    if (!arr.includes(null)) {
        result.innerHTML = `<p>DRAW !!</p>`
        game = false;
        return;
    }
    currentPlayer = (currentPlayer === "X" ? "O" : "X");
}

function handleReset() {
    game = true;
    arr = Array(9).fill(null);
    currentPlayer = "X";
    result.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        document.getElementById(i.toString()).innerText = "";
    }
}