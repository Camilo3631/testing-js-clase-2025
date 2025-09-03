Integration Test:

Las pruebas de integración ven cómo funciona todo en conjunto, nuestra configuración de routing, como esta el servicio, como ese servicicio  se conecta a mongolib y finalmente lo que unico que no hacemos ir a hasta la base de datos real.

Paso Paso a paso para hacer la prueba de integración (Integration test):



1. creamos un archivo llamado books.E2E.js

2. Antes hacer pruebas recuerda usar docker-compose up -d mongo para levantarlo

3. En el archivo realizamos lo siguiente



// Este request viene de supertest
const request = require('supertest');

// ponemos en marcha nuestra aplicación
const createApp = require('../app');

// estas son las pruebas para hello endpoit
escribe('Test for books', () => {
    // tenemos nuestra app de forma global para todas nuestra pruebas
    let app = null;
    // tenemos nuestra instacia de servidor global
    let server = null;
    // antes de todas las pruebas are un beforeAll que realice request
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


 
Con softwares como InSponia y Bostwan en donde también se hace pruebas de forma manual.

el / es obligatorio con el get 

como es una respuesta en json va el body

y damos en la terminal el siguiente comando npm run test:E2E 

y sale los libros de la base de datos (las pruebas integracion no deverian de ir hasta la base de datos lo puedne afectar puede uno correr riesgo o corrponpiendo esa infomración). ( la base datos no deveria de ser tocada)

4. Para no ir a hasta la base datos usamos moking 

Pero recuerda mirar bien la ruta:




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

Tambien importamos como generar varios libros  generateManyBook(20);

const createApp = require('../src/app') si esa una de las rutas

Para evitar errores ponemos lo siguiente primero:


// Generamos el spies
const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},  
})));


5. Para probar las pruebas usamos npm run test:E2E:



 PASS  E2E/hello.E2E.js
 PASS  E2E/books.E2E.js (7.975 s)
  ● Console

    console.log
      [
        {
          _id: 'ddb21fea-5dd5-4360-8ae2-35e59e4b8d9a',
          name: 'Refined Steel Keyboard',
          price: '444.00'
        },
        {
          _id: '3200fcc0-31c4-4e9c-b7b2-b0124dd011d3',
          name: 'Bespoke Plastic Pizza',
          price: '607.00'
        },
        {
          _id: 'd51e708c-8d91-43a4-86a9-1dd41020c1e9',
          name: 'Fantastic Soft Bike',
          price: '408.00'
        },
        {
          _id: '3d348739-b526-488c-91e3-2e440a8d8702',
          name: 'Fantastic Plastic Computer',
          price: '483.00'
        },
        {
          _id: '98a3c659-6896-4c6c-9c16-69f4830beae5',
          name: 'Bespoke Frozen Towels',
          price: '595.00'
        },
        {
          _id: 'cb511e74-fc0a-4cb5-9359-c0f0e7f7efd9',
          name: 'Modern Concrete Chair',
          price: '655.00'
        },
        {
          _id: '6bdff400-1695-4882-b652-b7cfd2cbcfe7',
          name: 'Intelligent Plastic Pizza',
          price: '559.00'
        },
        {
          _id: 'e64cd339-3e56-4bb0-89b6-2445c6bba988',
          name: 'Handcrafted Plastic Hat',
          price: '222.00'
        },
        {
          _id: '9c9a342f-0999-4ce6-bd3c-45848af9c87a',
          name: 'Practical Metal Tuna',
          price: '457.00'
        },
        {
          _id: '884e66c4-d65e-4cde-97d4-3cfba1d31b3d',
          name: 'Awesome Fresh Soap',
          price: '750.00'
        },
        {
          _id: '9cfd62ed-6ab5-44f3-88e1-846ce2b679f1',
          name: 'Unbranded Frozen Bike',
          price: '110.00'
        },
        {
          _id: 'ef93d714-9377-42bb-acdc-e0cfcd1abe65',
          name: 'Generic Cotton Chicken',
          price: '94.00'
        },
        {
          _id: 'cc5a92a1-5334-4606-8bc8-2bd653b5596f',
          name: 'Sleek Plastic Hat',
          price: '953.00'
        },
        {
          _id: '6c12a8eb-d804-4db7-a7ea-6502d9296ba5',
          name: 'Small Concrete Chair',
          price: '13.00'
        },
        {
          _id: '9e5e44ef-8580-4327-8c7c-37cafbcc7cf2',
          name: 'Luxurious Metal Towels',
          price: '992.00'
        },
        {
          _id: '121ac355-bcec-4bce-81d6-6af302538116',
          name: 'Fantastic Fresh Mouse',
          price: '118.00'
        },
        {
          _id: 'd3ae9e8e-ba0c-47c6-ad60-400e57f1c1e7',
          name: 'Rustic Fresh Bacon',
          price: '395.00'
        },
        {
          _id: '206a2473-e386-4d03-88c0-8aae4ea1e5d7',
          name: 'Elegant Wooden Soap',
          price: '272.00'
        },
        {
          _id: '31fd169c-6ced-413c-83b8-b9859f13e14a',
          name: 'Gorgeous Soft Pants',
          price: '176.00'
        },
        {
          _id: '2097eb61-b001-4620-b95b-c204d93394b1',
          name: 'Gorgeous Steel Shoes',
          price: '711.00'
        }
      ]

      at books.E2E.js:47:27


6. no solo hacemos la prueba a una unidad, a un método en especifico, sino como funciona toda nuestra aplicacion incluyendo routes, servicios y todo el modelo de datos o la arquitectura de nuestra aplicación, la unica parte que estamos obviando es la conexion a terceros en este caso la base de datos.

De resto se esta haciendo una prueba a todos los elementos por ende seria una prueba de integración.



