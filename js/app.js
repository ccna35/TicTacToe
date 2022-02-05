const game = document.querySelector(".game");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("button");
const result = document.querySelector(".result h2");
const resultIcon = document.querySelector(".result i");

let turn = "X";
let count = 0;

// This button resets the game & the result board
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  count = 0;
  result.innerText = "";
  game.style.pointerEvents = "all";
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;
    box.innerText = turn;
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    count++;
    console.log(count);
    // Checking rows
    let i = 0;
    while (i < 7) {
      if (
        boxes[i].innerText !== "" &&
        boxes[i].innerText === boxes[i + 1].innerText &&
        boxes[i + 1].innerText === boxes[i + 2].innerText
      ) {
        // console.log(boxes[i].innerText);
        result.innerText = `${boxes[i].innerText} Won!`;
        game.style.pointerEvents = "none";
      }
      i += 3;
    }

    // Checking columns
    let j = 0;
    while (j < 3) {
      if (
        boxes[j].innerText !== "" &&
        boxes[j].innerText === boxes[j + 3].innerText &&
        boxes[j + 3].innerText === boxes[j + 6].innerText
      ) {
        // console.log(boxes[j].innerText);
        result.innerText = `${boxes[j].innerText} Won!`;
        game.style.pointerEvents = "none";
      }
      j++;
    }

    // Checking diagonals
    if (
      boxes[0].innerText !== "" &&
      boxes[0].innerText === boxes[4].innerText &&
      boxes[4].innerText === boxes[8].innerText
    ) {
      // console.log(boxes[0].innerText);
      result.innerText = `${boxes[0].innerText} Won!`;
      game.style.pointerEvents = "none";
    } else if (
      boxes[2].innerText !== "" &&
      boxes[2].innerText === boxes[4].innerText &&
      boxes[4].innerText === boxes[6].innerText
    ) {
      // console.log(boxes[2].innerText);
      result.innerText = `${boxes[2].innerText} Won!`;
      game.style.pointerEvents = "none";
    }
    if (count === 9 && result.innerText === "") {
      result.innerText = `It's a Draw!`;
    }
  });
});
