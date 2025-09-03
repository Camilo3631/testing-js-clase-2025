const Person = require('./06-person');

// Se agrupan las pruebas de rango IMC
describe('Test for Person', () => {
  let person; // Se instancia el objeto persona para  automatizar.
  // beforEach corre antes de cada prueba
  beforeEach(() => {
    person = new Person('Kamil', '45', 1.7); // Asignamos datos a la nueva persona.
  });
  // Caso de prueba 1
  test('sholud return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  // Caso de prueba 2
  test('sholud return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
