Mocking

1. Suplantando MongoLib

Se utilizo el método jest.mock, al cual se le indica la clase que va suplantar

para traer una depencia en este caso es mongo.lib lo hacemos a partir
de la importanción.

le dice cuando se importa esta liberia se incia la suplación como la vamos a generar:

Generamos una función y luego vamos ejecutar jest.fn y luego utlizamso el método mockImplemtation,
dentro de mockimplementation ponemos  la suplantación puede ir un array lo que suplantar.

jest.moc('../lib/mongo.lib', () => jest.fn().mockImplentation);

2. Generamos la suplatanción de esa clase : MongoLibStatub, en la cual se contendrán los métodos getAll y     create los cuales sirven para retornar un resultado similar a la clase original.

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
}

3. fake : Para simular o rellenar datos. En este caso son libros  

fakeBooks hace referencia a un arreglo de objetos de tipo Book ficticios, 
los cuales serán retornados por el método getAll.


const fakeBooks = [
  {
    _id: 1,
    name: 'Pan Tadeus',
  },
  {
    _id: 2,
    name: 'Quo Vadis',
  },

]

Con esto ya se suplantaría el comportamiento de la clase MongoLib y sus métodos, es importante mencionar que la clase MongoLibStub puede crecer con forme se necesite.

4. Para verificar la prueba modifcamos el siguiente test


 describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toBe(2);    
    });

En la terminal pomnemos el siguiente comando:

jest 

Este el resultado de la prueba: 

console.log
    [ { _id: 1, name: 'Pan Tadeus' }, { _id: 2, name: 'Quo Vadis' } ]

      at Object.log (src/services/books.service.test.js:35:15)

  console.log
    [ { _id: 1, name: 'Pan Tadeus' }, { _id: 2, name: 'Quo Vadis' } ]

5. Cada test deveria de ser ailsado que significa que nuestra prueba
   anterior no debe de inferir o de dejar un estado para la siguiente
   prueba.


  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toBe(2);    
    });

    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toBe('Pan Tadeus');
      expect(books[1].name).toBe('Quo Vadis');
    });
  });
});

Haciendo lo siguiente le dicemos que queremos ir a los líbros de feBooks

  expect(books[0].name).toBe('Pan Tadeus');
  expect(books[1].name).toBe('Quo Vadis');

Esto puede ser útil si quieres que todos los casos de prueba que ejecutamos y en los dos 
casos de prueba tenemos la misma

Esto puede ser útil si quieres que todos los casos de prueba se tenga la msima infromación de
fake, pero también puede ser algo que pueda determinar es decir tu depronto en cada caso de prueba
necesitas un array diferente o de datos de prueba diferente en donde pueda jugar con más entornos
de prueba

6. Se aconseja como buena practica utilizar el método clearAllMocks() de jest para hacer una limpia de los mocks creados anteriormente.

jest.clearAllMocks();