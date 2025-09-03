const { generateManyBook } = require('../fakes/book.fakes');
const BooksService = require('./books.service');


// Generamos el spies
const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},  
})));

describe('Test for BooksService', () => {
  let service;
  
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Para este ecenario de prueba vamos a hacer mock y resolver o retornar un valor
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length)
      // Espiamos los libros (si fue o no llamado)
      expect(mockGetAll).toHaveBeenCalled();
      // Tambien puedo hacer cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // Preguntamos con que arguamentos fue llamdo 'books' y un objeto vacio
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list of books', async () => {
      // Arrange
      // Hacemos una prueba de comportamiento, insertamos un sype en cada caso de prueba
      const fakeBooks = generateManyBook(4)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name)

    });
  });
});