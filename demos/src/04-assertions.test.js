// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  // Manipulación del objeto
  data.lastname = 'molina';
  // Para usar o trabajar  con objetos usamos toEqual
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

// Valor null (nulo)
test('null', () => {
  const data = null;
  // Es null
  expect(data).toBeNull();
  // Es definido
  expect(data).toBeDefined();
  // Es  no es indefinido
  expect(data).not.toBeUndefined();
});

// Booleanos
test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  // 0, cadena vacía y false son valores falsy, por eso usamos toBeFalsy
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

// Strings
test('strings', () => {
  // toMatch verifica que el string contiene el patrón
  expect('welcome to spain').toMatch(/spain/);
});

// Arrays or list
test('list / arrys', () => {
  const numbers = [1, 2, 3, 4];
  //  toContain verifica que el array contenga el elemento
  expect(numbers).toContain(3);
});
