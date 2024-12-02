// tests/gameboard.test.js
import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('should place a ship on the board', () => {
    gameboard.placeShip(4, 1, 1); // Coloca um navio de tamanho 4 em (1, 1)
    expect(gameboard.board[1][1]).toBe('ship'); // Espera-se que a posição (1, 1) tenha um navio
  });

  test('should receive an attack and return true if a ship is hit', () => {
    gameboard.placeShip(4, 1, 1);
    expect(gameboard.receiveAttack(1, 1)).toBe(true); // Espera-se que o ataque acerte o navio
  });

  test('should receive an attack and return false if no ship is hit', () => {
    gameboard.placeShip(4, 1, 1);
    expect(gameboard.receiveAttack(2, 2)).toBe(false); // Espera-se que o ataque não acerte nada
  });

  test('should know when all ships are sunk', () => {
    gameboard.placeShip(4, 1, 1);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(4, 1); // Todos os ataques devem afundar o navio
    expect(gameboard.allSunk()).toBe(true); // Espera-se que todos os navios tenham sido afundados
  });
});
