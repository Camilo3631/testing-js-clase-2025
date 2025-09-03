// describe Reune un conjunto de pruebas, mejora la lectura del código y la encapsulación.
describe('group 1', () => {
  // BeforeAll es una sentencia [setup] que corre antes de todas las pruebas xej up db
  // Este tipo de utlidad se puede llamar hook y respesta al alcance o scope del grupo (describe)
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  // Despues antes de todas las pruebas afterAll().
  afterAll(() => {
    console.log('afterAll');
    // up db
  });
  // Por cada caso de antes prueba corre beforEach()
  beforeEach(() => {
    console.log('beforeEach');
  });
  // Después de cada caso de prueba corre afterEach()
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
    console.log('case 1');
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('groupo 2', () => {
    beforeAll(() => {
      console.log('beoforeAll');
      // up db
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
