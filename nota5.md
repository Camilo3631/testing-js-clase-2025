Implementado Setup

1. Implementar staup en objeto es de la siguiente

// Se agrupan las pruebas de rango IMC
describe('Test for Person', () => {
  let person; // Se instancia el objeto persona para automatizar

  // beforeEach corre antes de cada prueba
  beforeEach(() => {
    person = new Person('Kamil', 45, 1.7); // Mejor usar números en lugar de strings
  });

  // Caso de prueba 1
  test('should return down', () => {  // "should" estaba mal escrito
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  // Caso de prueba 2
  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});


2.  2️⃣ Sobre describe

Sirve para agrupar pruebas relacionadas con un mismo objeto o funcionalidad.

Es muy parecido a cómo en Java organizas métodos de prueba por clase.


3️⃣ Ejecutar una prueba específica

Tu forma funciona, pero la forma más estándar es:

