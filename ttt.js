var grid = [null, null, null, null, null, null, null, null, null];
var player = "X";
var winner;
function playTurn(index) {
  if (isGameOver()) {
    return false;
  }
    else if (grid[index]!==null) {
      return false;
    }
    else {
      grid[index] = player;
        if(player === "X") player = "O"
        else player = "X"
        return true;
  }
}

function isGameOver () {
  if (whoWon()) {
    return true;
  }
    else {
      return false;
    }
}

function whoWon () {
    if((grid[0]==="X") && (grid[1]==="X") && (grid[2]==="X")) return 1;
    if((grid[3]==="X") && (grid[4]==="X") && (grid[5]==="X")) return 1;
    if((grid[6]==="X") && (grid[7]==="X") && (grid[8]==="X")) return 1;
    
    if((grid[0]==="O") && (grid[1]==="O") && (grid[2]==="O")) return 2;
    if((grid[3]==="O") && (grid[4]==="O") && (grid[5]==="O")) return 2;
    if((grid[6]==="O") && (grid[7]==="O") && (grid[8]==="O")) return 2;
    
    if((grid[0]==="X") && (grid[3]==="X") && (grid[6]==="X")) return 1;
    if((grid[1]==="X") && (grid[4]==="X") && (grid[7]==="X")) return 1;
    if((grid[2]==="X") && (grid[5]==="X") && (grid[8]==="X")) return 1;
    
    if((grid[0]==="O") && (grid[3]==="O") && (grid[6]==="O")) return 2;
    if((grid[1]==="O") && (grid[4]==="O") && (grid[7]==="O")) return 2;
    if((grid[2]==="O") && (grid[5]==="O") && (grid[8]==="O")) return 2;
    
    if((grid[0]==="X") && (grid[4]==="X") && (grid[8]==="X")) return 1;
    if((grid[2]==="X") && (grid[4]==="X") && (grid[6]==="X")) return 1;
    
    if((grid[0]==="O") && (grid[4]==="O") && (grid[8]==="O")) return 2;
    if((grid[2]==="O") && (grid[4]==="O") && (grid[6]==="O")) return 2;
    
    if(grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8])
    return 3;
    
    else return 0;
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null];
  player = "X";
  
}

function checkWinner () {
    console.log(grid.join("-"))
if (whoWon() === 1) {
    alert("Player X has won!")
    window.location.reload()
}
    else if (whoWon() === 2) {
        alert("Player O has won!")
        window.location.reload()
        }
    else if (whoWon() === 3) {
        console.log(grid.join("-"))
        alert("It is a draw game!")
        window.location.reload()
    }
}


//Jquery codes
$(document).ready(function() {
 console.log('DOM is ready....') 
 restart();
//define all grids squares for easy access
var grid0 = $("#0")
var grid1 = $("#1")
var grid2 = $("#2")
var grid3 = $("#3")
var grid4 = $("#4")
var grid5 = $("#5")
var grid6 = $("#6")
var grid7 = $("#7")
var grid8 = $("#8")
var reset = $("button")
 
grid0.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[0]="X"
         grid0.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[0]="O"
        grid0.text("O")
        player = "X"
        checkWinner()
    }
 })

grid1.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[1]="X"
         grid1.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[1]="O"
        grid1.text("O")
        player = "X"
        checkWinner()         
    }
 })
    
grid2.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[2]="X"
         grid2.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[2]="O"
        grid2.text("O")
        player = "X"
        checkWinner()
    }
 })
    
    
 grid3.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[3]="X"
         grid3.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[3]="O"
        grid3.text("O")
        player = "X"
        checkWinner()
    }
 })   
    
grid4.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
        grid[4]="X" 
        grid4.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[4]="O"
        grid4.text("O")
        player = "X"
        checkWinner()
    }
 })
    
grid5.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
        grid[5]="X" 
        grid5.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[5]="O"
        grid5.text("O")
        player = "X"
        checkWinner()
    }
 })    
    
grid6.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[6]="X"
         grid6.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[6]="O"
        grid6.text("O")
        player = "X"
        checkWinner()
    }
 })    
    
 grid7.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
        grid[7]="X" 
        grid7.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[7]="O"
        grid7.text("O")
        player = "X"
        checkWinner()
    }
 })   

 grid8.click(function() {
     if ( player === "X") {
        console.log ("Player X make a move.") 
         grid[8]="X"
         grid0.text("X")
         player = "O"
         checkWinner()
     }
    else if (player === "O") {
        console.log ("Player O make a move.")
        grid[9]="O"
        grid8.text("O")
        player = "X"
        checkWinner()
    }
 })

reset.click(function() {
    restart()
    grid0.text("")
    grid1.text("")
    grid2.text("")
    grid3.text("")
    grid4.text("")
    grid5.text("")
    grid6.text("")
    grid7.text("")
    grid8.text("")
}) 







})



    
    
    
    
    
