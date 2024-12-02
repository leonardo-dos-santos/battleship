// tests/player.test.js
import { Player } from '../src/player';
import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

describe('Player', () => {
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player();  // Instanciando o Player corretamente
    player2 = new Player();  // Instanciando o Player corretamente
  });

  test('should attack opponent’s gameboard', () => {
    player2.board.placeShip(4, 1, 1); // Colocando um navio no tabuleiro do player2
    expect(player1.attack(player2, 1, 1)).toBe(true); // Espera-se que o ataque seja bem-sucedido (hit)
  });

  test('should miss if attack is outside ship’s location', () => {
    player2.board.placeShip(4, 1, 1);  // Colocando um navio no tabuleiro do player2
    expect(player1.attack(player2, 2, 2)).toBe(false); // Espera-se que o ataque não acerte o navio
  });
});
