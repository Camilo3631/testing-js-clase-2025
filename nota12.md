Configurando supertest en el API 

Las pruebas de integración, o de punto a punto, prueban cómo funcionan varios módulos o componentes en conjunto, a diferencia de los unit tests, que solo evalúan un elemento específico, una clase, una unidad o una función.

Normalmente las uni test todo lo que emepesemos a tener como dependecias emepezamos a hacer ténicas de moking.

En las pruebas de integración vamos a ver como funciona todo en conjunto, pero si lo que vamos a hacer moking a ser terceros como 
bases de datos, o api, pero elementos dentro de nuestro software 
si vamos a ver como funcionan en conjunto:

Unit Test: front-end

integration-test: front-end

-------------------------------------------------------------------

API Testing:

Como tenemos un API vamos a ver como instlar supertest:

1. Para istalar supertest con depencias de desarrollo usamos el siguiente comando:

npm i supertest --save-dev 

2. Realizaremos una configuración especial, porque jest también funciona con E2E con supertest:

 • Creamos un folder o carpeta llamado E2E

3. Dentro de la carpeta E2E creamos un archivo llamado jest-E2E.json con la siguiente configuración:


{
  "moduleFileExtensions": ["js"], // Solo considera archivos .js como módulos
  "rootDir": ".",                 // Carpeta raíz del proyecto
  "testEnvironment": "node",      // Ejecuta tests en entorno Node.js (no navegador)
  "testRegex": ".E2E.js$"         // Solo ejecuta archivos que terminen en .E2E.js (tests E2E)
}

4. En el packege.json ponemos la sigueinte configuración, para relizar pruebas E2E

  "test:E2E": "jest --config ./E2E/jest-E2E.json --forceExit",


Que tiene la siguiente configuración dentro de la carpeta E2E, que tome la configuración de nuestro archivo jest-E2E.json y finalmente para las pruebas
de integración que no se va quedar esperando si queda algo pendiente force la 
salida.

5. Para escriibir las pruebas como las pruebas E2E son para probar endpoits

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

5. Antes de hacer la prueba usar el siguiente comando que levanta la aplicación:

npm run start

El levanta toda la aplicación

http://localhost:3000/

Hello World!

Recuerda no nos conectamos hasta la base de datos

6. Para correr nuestra prueba usamos el siguiente comando:

npm run test:E2E




