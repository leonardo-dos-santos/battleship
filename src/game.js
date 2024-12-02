export function createGame() {
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');

  // Exemplo: Criar um grid para o tabuleiro
  for (let i = 0; i < 100; i++) {
    const playerCell = document.createElement('div');
    const computerCell = document.createElement('div');
    playerBoard.appendChild(playerCell);
    computerBoard.appendChild(computerCell);
  }
}
