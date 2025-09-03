// Este request viene de supertest
const request = require('supertest');

// ponemos en marcha nuestra aplicación
const createApp = require('../src/app');

// estas son las pruebas para hello endpoit
describe('Test for hello endpoit', () => {
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
    describe('test for [GET] /', () => {
        // deberia de retornar nuestro edpoit hello world
        test('should return "Hello world!"', () => request(app)
            .get('/') // ruta como string
            .expect(200) // si todo va bien 200ok
            .then((response) => { // la respuesta expect devuelve un texto igual a hello worold.
            expect(response.text).toEqual('Hello World!'); 
        }));
    });
});