// src/main.js
import { Player } from './player.js';
import { Gameboard } from './gameboard.js';
import { Ship } from './ship.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startGame = () => {
  const player1 = new Player();
  const player2 = new Player();

  // Colocando navios para cada jogador
  player1.board.placeShip(4, 0, 0);  // Coloca um navio no jogador 1
  player2.board.placeShip(4, 1, 1);  // Coloca um navio no jogador 2

  console.log('Jogo Iniciado!');

  // Função para rodar um turno do jogo
  const playerTurn = (player, opponent) => {
    rl.question('Digite as coordenadas de ataque (ex: 1 1): ', (input) => {
      const [x, y] = input.split(' ').map(Number);
      const result = player.attack(opponent, x, y);
      console.log(result ? 'Acertou!' : 'Errou!');
      
      if (opponent.board.allSunk()) {
        console.log('Você venceu!');
        rl.close();
      } else {
        playerTurn(opponent, player); // Passa o turno para o outro jogador
      }
    });
  };

  // Começa o turno com o Jogador 1
  playerTurn(player1, player2);
};

// Rodando o jogo
startGame();
