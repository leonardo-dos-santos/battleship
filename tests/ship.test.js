// tests/ship.test.js
import { Ship } from '../src/ship';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(4);  // Navio com tamanho 4
  });

  test('should mark a hit on the ship', () => {
    ship.hit(0); // Marca o primeiro ponto como atingido
    expect(ship.hits[0]).toBe(true);  // Espera-se que o ponto 0 tenha sido atingido
  });

  test('should return true if the ship is sunk', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3); // Todos os pontos foram atingidos
    expect(ship.isSunk()).toBe(true); // Espera-se que o navio tenha sido afundado
  });
});
