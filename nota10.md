Spies

Los spies son stock con información en el cual puedo ver como se ha llamado el método, cuantas veces se ha llamdo, con que parámetros se ha llamado y son importantes para pruebas de caja blanca.

En las pruebas de caja blanca ya entro a la caja precisamente no pruebo entrada y salida priciamente sino comportamiento que queire decir por ejemplo qué un método
aya llamado a servicio de una manera adecuada o en cierto tiempo con ciertos parámetros:

Vamos como se usan los spies:

1. Para este ejemplo se va espiar el comportamiento de le método getAll .

Para realizar esto debemos crear una constante y asignarla a función de jest

// Generamos el spies
const mockGetAll = jest.fn();


2. Suplentación de la lllamada a la liberiía


jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},  
})));

3. Le preguntamos a nuestro spia lo siguiente:  Espiamos los libros (si fue o no ), Tambien puedo hacer cuantas veces fue llamado,  Preguntamos con que arguamnetos fue llamdo 'books' y un objeto vacio

con lo sigieuntes comandos:

 •  // Espiamos los libros (si fue o no llamado)
      expect(mockGetAll).toHaveBeenCalled();

 •    // Tambien puedo hacer cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);

•     // Preguntamos con que arguamentos fue llamdo 'books' y un objeto vacio
      expect(mockGetAll).toHaveBeenCalledWith('books', {});

4. En cada caso de prueba puedo ineyctar un fake o caso de prueba (dato)

   test('should return a list of books', async () => {
      // Arrange
      // Hacemos una prueba de comportamiento, insertamos un sype en cada caso de prueba
      mockGetAll.mockResolvedValue([
        { _id: 1, name: 'Pan Tadeus 2' },
        { _id: 2, name: 'Quo Vadis 2' },
      ]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toBe('Pan Tadeus 2');
      expect(books[1].name).toBe('Quo Vadis 2');
    });

