// src/player.js
import { Gameboard } from './gameboard.js'; 
import { Ship } from './ship.js';

class Player {
  constructor() {
    this.ships = [];
    this.board = new Gameboard();  // Instanciando o Gameboard
  }

  // Método para atacar o tabuleiro de outro jogador
  attack(opponent, x, y) {
    return opponent.board.receiveAttack(x, y);  // Chama o método de ataque do oponente
  }

  // Outros métodos podem ser adicionados conforme necessário
}

export { Player };
