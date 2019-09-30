// var test = "the quick brown fox jumps over the calm kitten quietly";
// var test2 = "this hat is the greatest!";
// var test3 = "aa";

// function findNonDuplicate(tester) {
//   duplicate = true;
//   index = 0;
//   characters = tester.toLowerCase().split('');
//   while (duplicate && index < tester.length) {
//     if (characters.filter(character => {
//       if (characters[index] === character) {
//         return true;
//       } else {
//         return false;
//       }
//     }).length === 1) {
//       duplicate = false;
//     } else {
//       index++;
//     }
//   }
//   if (duplicate) {
//     console.log("THEY'RE ALL DUPLICATES");
//   } else {
//     console.log(characters[index]);
//   }
// }

// findNonDuplicate(test);
// findNonDuplicate(test2);
// findNonDuplicate(test3);


var game = {
  numberToGuess: 0,
  currentScore: 0,
  wins: 0,
  losses: 0,
  crystals: [0, 0, 0, 0],

  resetGame() {
    game.currentScore = 0;
    $("#currentScore").text(game.currentScore);
    game.numberToGuess = Math.round(Math.random() * 101) + 19;
    $("#numberToGuess").text(game.numberToGuess);
    game.crystals.forEach((crystal, index) => {
      $("#crystal" + index).off('click');
      game.crystals[index] = (Math.round(Math.random() * 11) + 1);
      $("#crystal" + index).on('click', function () {
        game.currentScore += game.crystals[index];
        $("#currentScore").text(game.currentScore);
        if (game.currentScore > game.numberToGuess) {
          game.losses++;
          alert("You Lost... Better Luck Next Time!");
          $("#losses").text(game.losses);
          setTimeout(() => {
            game.resetGame();
          }, 2000);
        } else if (game.currentScore === game.numberToGuess) {
          game.wins++;
          alert("You Won! Think you can do it again?");
          $("#wins").text(game.wins);
          setTimeout(() => {
            game.resetGame();
          }, 2000);
        }
      })
    });
  }
}
$("#wins").text(game.wins);
$("#losses").text(game.losses);
$("#numberToGuess").text(game.numberToGuess);
$("#currentScore").text(game.currentScore);
game.resetGame();
