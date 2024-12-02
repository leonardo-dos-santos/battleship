// src/gameboard.js

class Gameboard {
  constructor() {
    this.ships = [];
    this.board = this.createBoard();
  }

  // Cria um tabuleiro 10x10
  createBoard() {
    return Array(10).fill().map(() => Array(10).fill(null)); 
  }

  // Coloca um navio no tabuleiro
  placeShip(length, x, y) {
    for (let i = 0; i < length; i++) {
      this.board[x + i][y] = 'ship'; // Coloca o navio na posição especificada
    }
  }

  // Recebe um ataque e retorna se foi um acerto (true) ou erro (false)
  receiveAttack(x, y) {
    if (this.board[x][y] === 'ship') {
      this.board[x][y] = 'hit'; // Marca como atingido
      return true;
    }
    return false; // Se não for navio, é um erro
  }

  // Verifica se todos os navios foram afundados
  allSunk() {
    for (let row of this.board) {
      if (row.includes('ship')) return false; // Se encontrar um 'ship' ainda no tabuleiro
    }
    return true; // Se não encontrar nenhum, todos foram afundados
  }
}

export { Gameboard };
