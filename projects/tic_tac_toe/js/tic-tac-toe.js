var count = 0;
var random = 0;
var playerX = "X";
var playerO = "O";
var player = playerX;
var playerChoice;
var gameOver = false;


// ask user if one or two player (for now two player will be only option)
function launchGameTypeModal() {
  $("#onePlayer-twoPlayer").show();
  $("#two-player").unbind("click").click(function() {
    $("#onePlayer-twoPlayer").hide();
    $("#message").show();
    $("#message").append("<h1>X always goes first</h1>");
    setTimeout(function() {
      $("#message").empty();
      $("#message").hide();
    }, 1000);
    launchTwoPlayerMode();
  });
  $("#one-player").click(function() {
    $("#onePlayer-twoPlayer").hide();
    launchGamePieceModal();
  });
}

// ask user if they want to be x or o
function launchGamePieceModal() {
  $("#choose-piece").show();
  $("#button-x").click(function() {
    $("#choose-piece").hide();
    playerChoice = "x";
    launchXPlayerMode();
  });
  $("#button-o").click(function() {
    $("#choose-piece").hide();
    playerChoice = "o";
    launchOPlayerMode();
  });
}

function launchTwoPlayerMode() {
  $(".square").unbind("click").click(function(element) {
    takeTurn($(this));
  });
}


function launchXPlayerMode() {
  random = getRandomNumber();
  if (count % 2 === 0) {
    if (!gameOver) {
    $(".square").unbind("click").click(function(element) {
      takeTurn($(this));
      launchXPlayerMode();
    });
  }
  } else {
    if (!gameOver) {
      takeTurn($("#"+random));
      launchXPlayerMode();
    }
  }
}

function launchOPlayerMode() {
  random = getRandomNumber();
  if (count % 2 !== 0) {
    if (!gameOver) {
      $(".square").unbind("click").click(function(element) {
        takeTurn($(this));
        launchOPlayerMode();
      });
    }
  } else {
    if (!gameOver) {
      takeTurn($("#"+random));
      launchOPlayerMode();
    }
  }
}

function getRandomNumber() {
  random = Math.floor(Math.random() * 9);
  if ($("#"+random).hasClass("x") && $("#"+random).hasClass("o")) {
    getRandomNumber();
  } else {
    return random;
  }
}

function takeTurn(cell) {
  if ((!cell.hasClass("o")) && (!cell.hasClass("x"))) {
    cell.addClass(player.toLowerCase());
    cell.text(player);
    checkForWinner();
    switchPlayer();
  }
}

function switchPlayer() {
  count++;
  if (player === playerX) {
    player = playerO;
  } else {
    player = playerX;
  }
}




function checkForWinner() {
  if (
   ($("#0").text() === player) &&
   ($("#1").text() === player) &&
   ($("#2").text() === player) ||

   ($("#3").text() === player) &&
   ($("#4").text() === player) &&
   ($("#5").text() === player) ||

   ($("#6").text() === player) &&
   ($("#7").text() === player) &&
   ($("#8").text() === player) ||

   ($("#0").text() === player) &&
   ($("#3").text() === player) &&
   ($("#6").text() === player) ||

   ($("#1").text() === player) &&
   ($("#4").text() === player) &&
   ($("#7").text() === player) ||

   ($("#2").text() === player) &&
   ($("#5").text() === player) &&
   ($("#8").text() === player) ||

   ($("#0").text() === player) &&
   ($("#4").text() === player) &&
   ($("#8").text() === player) ||

   ($("#2").text() === player) &&
   ($("#4").text() === player) &&
   ($("#6").text() === player)) {
      $("#message").append("<h1>" + player + " wins!</h1>");
      $("#message").show();
      gameOver = true;
      setTimeout(function() {
        reset();
      }, 2000);
  } else if (count >= 8) {
      $("#message").append("<h1>It's a draw</h1>");
      $("#message").show();
      gameOver = true;
      setTimeout(function() {
        reset();
      }, 2000);
  }
}

function reset() {
  gameOver = false;
  $(".square").empty();
  $("#message").empty();
  $("#message").hide();
  $(".square").removeClass("x o");
  count = 0;
  if (playerChoice === "o") {
    player = playerX;
    launchOPlayerMode();
  } else {
    player = playerX;
  }

}

launchGameTypeModal();
