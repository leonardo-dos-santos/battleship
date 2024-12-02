// src/ship.js

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false); // Marca que nenhum ponto foi atingido
  }

  // Marca uma parte do navio como atingida
  hit(index) {
    this.hits[index] = true;
  }

  // Verifica se o navio está afundado
  isSunk() {
    return this.hits.every(hit => hit); // Se todos os pontos foram atingidos
  }
}

export { Ship };
