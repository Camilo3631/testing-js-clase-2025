
// Generamos el spies
const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},  
})));



// Este request viene de supertest
const request = require('supertest')

// ponemos en marcha nuestra aplicación
const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fakes');

// estas son las pruebas para hello endpoit
describe('Test for books', () => {
    // tenemos nuestra app de forma global para todas nuestra pruebas
    let app = null;
    // tenemos nuestra instacia de servidor global
    let server = null;
    // antes de todas las pruebas are un beforeAll que realice requet
    beforeAll(() => {
        app = createApp();
        // nuestro aplicación corre en un puerto especifico 3001
        server = app.listen(3001)
    });
    // antes de correr todos nuestro casos de prueba va a cerrar la aplicación
    afterAll(async () => {
        await server.close();
        // es una funcion de expres
    })

    // Encerramos nuestro caso de prueba para get
    describe('test for [GET] /api/v1/books', () => {
        test('should return a list books"', () => {  
         // Arrange
         const fakeBooks = generateManyBook(20);
            mockGetAll.mockResolvedValue(fakeBooks);
            return request(app)
                .get('/api/v1/books') // ruta como string
                .expect(200) // si todo va bien 200ok
                .then(({ body }) => {
                  console.log(body)
                  expect(body.length).toEqual(fakeBooks.length);
              });
         });
    });
});

