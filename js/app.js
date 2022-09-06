/*-------------------------------- Constants --------------------------------*/
//step 5 below
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2],
]


/*---------------------------- Variables (state) ----------------------------*/
// Step 1 - step 1 below 
  let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

// Step 2 - step 2 below 

  // 2a) In a constant called `squareEls`, store the nine elements 
  //    representing the squares on the page.

  // 2b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.
  const squareEls = document.querySelectorAll("section > div")
  // console.log(squareEls)
  const messageEl = document.querySelector('#message')
  // console.log(messageEl)
  const parentEl = document.querySelector(".board")
  const resetBtnEl = document.querySelector("#reset-button")

/*----------------------------- Event Listeners -----------------------------*/
parentEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
// Step 3 - step 3 below

init ()
function init () {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render()
}
// console.log(init)

// Step 4 - step 4 below 

  function render() {
    board.forEach((space,idx) => {
    const playerChoice = squareEls[idx]
    if (space === -1) {
      squareEls[idx].textContent = 'O'
    } else if (space === 1) {
      squareEls[idx].textContent = 'X'
    }if (space === null) {
      playerChoice.textContent = ''
    }
    })
  
  if (winner === null) {
    if(turn === 1) {
      messageEl.textContent = "Player one it's your go!"
    } else {
      messageEl.textContent = "Player two it's your go!"
    }
  } else if (winner === 'T') {
    messageEl.textContent = "It's a Tie!"
  } else if (winner === 1) {
    messageEl.textContent = "Congratulations, player one wins!"
  } else if (winner === -1) {
    messageEl.textContent = "Congratulations, player two wins!"
  }
}
//step 6
function handleClick (evt) {
  const sqIdx = parseInt(evt.target.id[2])
  if (board[sqIdx] != null) return
    else {
      board[sqIdx] = turn
      turn = turn * (-1)
      winner = getWinner()
      render()
    }
}


function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]]
  }
    if (board.includes(null)) {
      return 
    } else {
      return "Tie"
    }
}











  



  

// Step 6 - Handle a player clicking a square with a `handleClick` function

  // 6a) Create a function called `handleClick`. It will have an `evt`
  //     parameter.

  // 6b) Attach an event listener to the game board (you can do this to each
  //     one of the existing `squareEls` OR add a new cached element reference
  //     that will allow you to take advantage of event bubbling). On the
  //     `'click'` event, it should call the `handleClick` function
  //     you created in 6a.

  // 6c) Obtain the index of the square that was clicked by "extracting" the 
  //     index from an `id` assigned to the element in the HTML. Assign this  
  //     to a constant called `sqIdx`.

  // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
  //     because that square is already taken. Also, if `winner` is not `null`
  //     immediately `return` because the game is over.

  // 6e) Update the `board` array at the `sqIdx` with the current value of
  //     `turn`.

  // 6f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //     `-1`, and vice-versa).

  // 6g) Set the `winner` variable if there's a winner by calling a new 
  //     function: `getWinner`.

  // 6h) All the state has been updated so we need to render our updated state 
  //     to the user by calling the `render` function we wrote earlier.








// Step 7 - Build the `getWinner` function

  // 7a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // 7b1)Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // 7b2)For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

// 7c) If there is no winner, check to see if there is a tie. Set the  
  //     `winner` variable to `'T'` if there are no more nulls in the board  
  //     array byreturning the string `'T'`.

  // 7d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // 8a) Add a reset button to the HTML document.

  // 8b) Store the new reset button element in a constant named `resetBtnEl`.

  // 8c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in 3.