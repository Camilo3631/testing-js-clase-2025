// polonia.test.js
const { contarCiudadesPolonia } = require('./03-polonia');

test('Polonia tiene 15 ciudades en la lista', () => {
  expect(contarCiudadesPolonia()).toBe(15);
});
