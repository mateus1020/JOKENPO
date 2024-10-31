const result = document.querySelector(".result");
const humamScore = document.querySelector("#humam-score");
const machineScore = document.querySelector("#machine-score");

let humamScoreNumber = 0;
let machineScoreNumber = 0;

// AQUI ESTAMOS USANDO A ARROW FUNCTION
const clickUser = (escolhaUser) => {
  playTheGame(escolhaUser, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"]; // CHOICE = Chance(PEDRA-PAEPL-TESOURA)
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + "Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu Empate";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humamScoreNumber++;
    humamScore.innerHTML = humamScoreNumber;
    result.innerHTML = `Você Ganhou`;
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = `Você perdeu para MÁQUINA`;
  }
};
