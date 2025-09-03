/* eslint-disable import/no-unresolved */
const { sum, multiply, divide } = require('./02-math');
// Pruebas para el paquete de math
describe('Test for math', () => {
  // También podemos usar describe para la suma y sus casos de prueba y método sum
  describe('tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      // expect se usa  para hacer aserciones o comprobaciones en los test
      expect(rta).toBe(4);
      // preguntamos la respuesta es igual a 4.
    });
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      // expect se usa  para hacer aserciones o comprobaciones en los test
      expect(rta).toBe(4);
      // preguntamos la respuesta es igual a 4.
    });
  });
});
// También podemos usar describe para la suma y sus casos de prueba y método multiply
describe('tests for multiply', () => {
  test('should be 4', () => {
    const rta = multiply(1, 4);
    // expect se usa  para hacer aserciones o comprobaciones en los test
    expect(rta).toBe(4);
    // preguntamos la respuesta es igual a 4.
  });
});
describe('tests for divide', () => {
  test('should divide', () => {
    const rta = divide(6, 3);
    // expect se usa  para hacer aserciones o comprobaciones en los test
    expect(rta).toBe(2);
    const rta2 = divide(5, 2);
    // expect se usa  para hacer aserciones o comprobaciones en los test
    expect(rta2).toBe(2.5);
    // preguntamos la respuesta es igual a 4.
  });
  test('should divide for zero', () => {
    const rta = divide(6, 0);
    // expect se usa  para hacer aserciones o comprobaciones en los test
    expect(rta).toBeNull();
    const rta2 = divide(5, 0);
    // expect se usa  para hacer aserciones o comprobaciones en los test
    expect(rta2).toBeNull();
    // preguntamos la respuesta es igual a 4.
  });
});

// Palabra calve para correr una prueba 'test
// Prueba1
test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta).toBe(4);
  // preguntamos la respuesta es igual a 4.
});

// Prueb 2.
test('should be 4', () => {
  const rta = multiply(1, 4);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta).toBe(4);
  // preguntamos la respuesta es igual a 4.
});

// Prueba 3.
test('should divide', () => {
  const rta = divide(6, 3);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta2).toBe(2.5);
  // preguntamos la respuesta es igual a 4.
});

// Prueba 4.
test('should divide for zero', () => {
  const rta = divide(6, 0);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  // expect se usa  para hacer aserciones o comprobaciones en los test
  expect(rta2).toBeNull();
  // preguntamos la respuesta es igual a 4.
});
