E2E

Las pruebas End to End o punto a punto, pruebas en las que si tiene en cuentas estas fuentes de datos externas, sobre todo por ejemplo con nuestra base de datos.

Recuerda hemos curazo por la Unit test que son diractamente unitarias, a un código o un método en especifico. 

Integration test en donde ya acomplamos todo pero no llegamos hasta la base dato.

Sin embargo en la End to End si vamos a llegar hasta la base de datos, ahora tienes que tener en cuenta que ese riser de tercero
que no vamos poder llegar porque no esta en nuestro controno.

Por ejemplo que te conectaras a una API de google o te conectaras
a la API de marcherlnt de microsof pues realmente no puedes hacer
testing de ahí esas cosas si tendríamos que hacer a fuerza hacer
moking porque no podemos estar ejecutando directamente ese servicio.

Pero en este tipo de pruebas si podemos ir hasta la base de datos
si esta en nuestro control, en el caso de farent norlamente un fornt-end lo que hace es conectarse asi una back-end normalmente
también ariamos un emulación de ese back-end para probar esa coneción saber que si yo le doy click a un botón por ejemplo obtiene que ir a un request y pues retorname o renderizar cierta
infromación.

En el caso de nuestra API es muy importante como vamos a hacer
esa conexión a la base de datos y esta prueba punto a punto va
a probar no solo el flujo de el edpoit es decir donde hacemos
request, va correr la ruta luego el servicio y luego vamos hacia
nuestra mongolib hace una consulta a la base de datos y nos la devuelve osea literalmente vamos a hacerla la consulta hasta la 
base de datos y es importante porque hasta vamos a poder hacer
verificaciones si realmente.

Por ejemeplo a la hora de creación inserto la base de datos que nostros le mandamos al request y finalizo en la base de datos como se esperaba. 

O por ejemplo nostros podemos instar semillas de datos, semillas de infromación quiere decir que podemos tener una base de datos
con alguna data prepoblada y saber si hacemos request deberia devolver esa información.

Ahora nostros norlamente no vamos comunicarnos con la base de datos de produción entonces cómo aríamos para emular esta base
de datos realmente no la vamos a emular es una base de datos
real pero lo que vamos a cambiar es de direción es decir en vez
de entrar a la base de datos de proución, norlamente tenemos una base de datos real pero con datos o un ambiente que podemos insetar semillas de información o podemos eliminar información, acutalizar información osea una base de datos donde podemos hacer todo este tipo de pruebas si llegara a fallar algo, si llegara a borrar datos no va aver ningun problema pues simplemente es una base de datos disponible para esto. 

Difrente a la producción en donde si tendríamos todos los datos reales de nuestra aplicación.

Vamos a ver toda esta interación utlizando una base de datos real.

Paso a paso:

1. Creamos un archivo para pruebas (en este caso es el archivo books.E2E.js que nace del archivo que se realizo las pruebas de integración a medida que suibmos en la piramide y cono (0) moking):


jest.setTimeout(30000); // aumenta a 30s o más al inicio de tu archivo

// Este request viene de supertest
const request = require('supertest')
// Conexion hacia la base de datos
const { MongoClient } = require('mongodb');
// ponemos en marcha nuestra aplicación

const createApp = require('../src/app');
// configuramos nuestra base datos
const { config } = require('../src/config');


// Conexion para las pruebas E2E
const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;


// estas son las pruebas para hello endpoit
describe('Test for books', () => {
    // tenemos nuestra app de forma global para todas nuestra pruebas
    let app = null;
    // tenemos nuestra instacia de servidor global
    let server = null;
    // Nos concetamos hacia la base datos
    let database = null;

    // antes de todas las pruebas are un beforeAll que realice requet
    beforeAll(async () => {
        app = createApp();
        // nuestro aplicación corre en un puerto especifico 3001
        server = app.listen(3002);
        const client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Conexion y cliente
        await client.connect()
        // la base es igual al cliente y la base datos desada
        database = client.db(DB_NAME); 
    });
    // antes de correr todos nuestro casos de prueba va a cerrar la aplicación
    afterAll(async () => {
        await server.close();
        // es una funcion de expres

    })

    // Encerramos nuestro caso de prueba para get
    describe('test for [GET] /api/v1/books', () => {
        test('should return a list books"', async () => {  
         // Arrange
        // semilla de datos ( información)
        const seedData = await database.collection('books').insertMany([
            {
              name: 'Book1',
              year: 1998,
              author: 'Kamil',
            },
            {
             name: 'Book1',
             year: 2020,
             author: 'Kamil',
            }
        ]);
        // Act 
            return request(app)
                .get('/api/v1/books') // ruta como string
                .expect(200) // si todo va bien 200ok
                .then(({ body }) => {
                  console.log(body)
                  expect(body.length).toEqual(seedData.insertedCount);
              });
         });
    });
});

2. En nuestro docker creamos una segunda basé de datos:

version: '3.8'

services:
  # Base de datos de producción
  mongo:
    image: mongo:6.0
    container_name: api-mongo-1
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root123
      MONGO_INITDB_DATABASE: demo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  # Base de datos para pruebas E2E
  mongo-e2e:
    image: mongo:6.0
    container_name: api-mongo-e2e
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: test
      MONGO_INITDB_ROOT_PASSWORD: test123
      MONGO_INITDB_DATABASE: demo_e2e
    ports:
      - "27018:27017"
    volumes:
      - mongo-e2e-data:/data/db

volumes:
  mongo-data:
  mongo-e2e-data:


Recomendación usar puertos diferentes para pruebas y entorno de desarrollo por las siguientes razones:

1. Uso de puertos distintos:

 • Evitar conflictos: un puerto en tu máquina solo puede ser usado por un proceso a la vez.

 • Separar entornos: producción, desarrollo y pruebas deben tener distintos.

 Ejemplo típico:

 Etorno         Puerto app       Puerto Mongo
 -----------------------------------------------------
 Producción      3001             27017
 Desarrollo      3002             27018
 Pruebas E2E     3003             27019

 2. Ventajas de esta prática:

 • Evita choques entre contenedores o procesos.

 • Mantiene claridad sobre a qué entorno estás conectado

 • Permite aislamiento de datos, evitando que pruebas afecten producción.

 • Facilita el trabajo en equipo, envitando que alguien bloque el puerto de otro.

 3. Buenas prácticas

  • Variables de entorno: no hardcodear puertos en la app o docker-compose.

  MONGO_PORT=${MONGO_PORT:-27017}

 • Bases de datos separadas por entorno (producción vs pruebas).

 • Documentación: mantener un registro de puertos para todos los servicios y entornos.

4. Situación en oficinas

 • Es habitual tener 3001 para producción local y 3002 para desarrollo.

 • En proyectos grandes pueden existir varios puertos para APIs, microservicios y pruebas.

 • Mantener esta organización evita errores y conflictos entre desarrolladores.

3️⃣ En nuestro .env:

MONGO_DB_NAME=demo
MONGO_URL=mongodb://test:test123@localhost:27018/demo_e2e?authSource=admin

    MONGO_DB_NAME → base de datos que la app usará para leer/escribir (demo).

    MONGO_URL → conexión completa: usuario test, contraseña test123, host localhost, puerto 27018, base demo_e2e y autenticación en admin.

Esto permite separar usuario y datos correctamente para E2E












