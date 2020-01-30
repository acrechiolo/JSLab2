const randomDamage = _ => Math.floor(Math.random() * 10) + 1;

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
function attackPlayer(health) {
  return health - randomDamage();
}
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}.`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}.`);
};
const isDead = health => {
  return health <= 0 ? true : false;
};
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      isDead(player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      if (attacker === player2) {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        isDead(player1Health);
        if (isDead(player1Health)) {
          logDeath(player2, player1);
          break;
        }
      }
    }
  }
}
fight("Hiero", "Chumby", 300, 300);

//extended challenges

//square
function printSquare(width) {
  let poundSymbol = "#";
  for (let i = 0; i < width; i++) {
    console.log(poundSymbol.repeat(width));
  }
}
printSquare(3);

//triangle
function printTriangle(width) {
  let pound = "#";
  for (let i = 1; i <= width; i++) {
    console.log(pound.repeat(i));
  }
}
printTriangle(4);

//grade

function getGrade(grade) {
  if (grade >= 90 && grade <= 100) {
    console.log("A");
  } else if (grade >= 80 && grade < 90) {
    console.log("B");
  } else if (grade >= 70 && grade < 80) {
    console.log("C");
  } else if (grade >= 60 && grade < 70) {
    console.log("D");
  }
}
getGrade(80);
