Proyecto de API

1. Lo primero es Aseguranos que nos encontramos en la carpeta de API

cd "api"

2. Instlamos las depedencias del proyecto.
 
npm i 

3. Son dependencias de expres para una api en express  pero no tiene nada de código robusto

{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "start:dev": "DEBUG=app:* nodemon src/index.js",
    "start:prod": "NODE_ENV=production node src/index.js",
    "test": "jest",
    "lint": "eslint src/**",
    "lint:fix": "eslint src/** --fix"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "mongodb": "^4.4.1"
  },
  "devDependencies": {
    "eslint": "^8.10.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.25.4",
    "jest": "^27.5.1",
    "nodemon": "^2.0.15"
  }
}

Con una base de datos en mongodb

4. Generamos un archivo .env es mala páctica subir las variables de (ambiente)  entorno al repositorio.

MONGO_DB_NAME=demo
MONGO_URL=mongodb://root:root123@localhost:27017?retryWrites=true&writeConcern=majority

5. Para levantar esta base de tenemos un archivo llamado docker-compose.yml, sino tienes docker no ahí problema igual podrias tener un mongo atlas en el .env podrias ponerle la dirección de tu mongoaltas o si ya tinenes isltado mongo en tu local solo tiennes tu url, sino para esto esta el docker-compose.yml.

Para levantar monngo usado docker usamos los  siguientes comandos:

docker-compose up -d mongo


camiloacosta@MacBook-Air-de-Camilo api % docker-compose up -d mongo 
WARN[0000] /Users/camiloacosta/Desktop/Front-end 2 platzi/Curso de Introducción al Testing con JavaScript/Clase 15 Proyecto De API/testing-js/api/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Running 1/1
 ✔ Container api-mongo-1  Started     


Recuerda se estoy levantando una báse de datos de mongo, sin tener que instalarla o configurarla, sino simplemnte con un archivo y  sin tocar los drivers de la computadora es un de los potenciales de mongo.

Para comprobar que mongo corre usamos el siguiente comando:

docker-compose ps

camiloacosta@MacBook-Air-de-Camilo api %  docker-compose ps
WARN[0000] /Users/camiloacosta/Desktop/Front-end 2 platzi/Curso de Introducción al Testing con JavaScript/Clase 15 Proyecto De API/testing-js/api/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
NAME          IMAGE       COMMAND                  SERVICE   CREATED         STATUS         PORTS
api-mongo-1   mongo:6.0   "docker-entrypoint.s…"   mongo     3 minutes ago   Up 3 minutes   0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp

También si quieres bajar la base de datos o el servicio puedes usar el siguiente comando:

docker-compose down

Si le he bajado con el siguiente la vuelvo a subir y la crea otra vez:

docker-compose up -d mongo

6. Para explorar bases de datos en mongo usamos el siguiente sotfware que encontramos la página de mongo atlas la app se llama:

MongoDB Compass

Cuando estamos en la app de  MongoDB Compass damos click el boton de + 

New Connection
Manage your connection settings

URI
Edit Connection String

mongodb://localhost:27017/
Name
Color

No Color

Favorite this connection
Favoriting a connection will pin it to the top of your list of connections


Advanced Connection Options
How do I find my connection string in Atlas?
If you have an Atlas cluster, go to the Cluster view. Click the 'Connect' button for the cluster to which you wish to connect.

See example
How do I format my connection string?
See example

Sale este ventna  en URL digitamos la url: mongodb://root:root123@localhost:27017?retryWrites=true&writeConcern=majority y le damos clik en connect o save contecting y conecta

Seguido de esto ya tenemos una base de datos en mongo y le damos click en la Crate database:

-------

Create Database
Database Name
Collection Name

Time-Series
Time-series collections efficiently store sequences of measurements over a period of time.Learn More

Additional preferences(e.g. Custom collation, Clustered collections)
Before MongoDB can save your new database, a collection name must also be specified at the time of creation. More Information

le ponemos el nombre de demos y la collecion de books.

localhost:27017


demos

books



Documents
0

Aggregations

Schema

Indexes
1

Validation


Type a query: { field: 'value' } or 
Generate query






Options

Add data

Export Data

Update

Delete

25
0 – 0 of 0








This collection has no data
It only takes a few seconds to import data from a JSON or CSV file.

como nos vemos no tiene aun nada  es una particion secilla

7. Para crear el contenodo damos click en   + Add data y selecionamos la opcción de Insert Document:

/** 
* Paste one or more documents here
*/
{
  "_id": {
    "$oid": "68a78a23bedd40f5c63ecf94"
  }
} 

Aca colamos nuestro libro

{
  "_id": {
    "$oid": "68a78a23bedd40f5c63ecf94"
  },
  "name": "Harry Pottter"
}

8. Para inicializar nuestra aplicación usamos el siguiente comando:

npm run start

9. En el poryecto nos damos cuenta que existe un archivo llamado index.js este crea la aplicacion y lo pone ac escuhar un puerto especfico, ahí un archivo llamado config  que usa variables de ambiente del archivo 

.env  

Donde estamos llenndo la URL, Nombre de la base de datos y tambien ponemos el puerto, una ves echo eso 
index.js saca o crea la aplicación desde app.js


const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

es una api de express que usa express para poder crear nuestra api



Aca esta nuestra primera ruta que nuestro hello world

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

Las demas rutas las encuentras en la carpeta routes.

 app.use('/api/v1', router); este le edipoit que se define para toda nuestra api cómo prefijo así como prefijo como sufijo quiere decir que simpre va tener endpotis bajo el sufijo  /api/v1 luego lo que emepecemso a coloca ahí 


  router.use('/books', booksRouter); este el primer router que es el bockss

En booksRouter tenemos ya la definición


const express = require('express');
const BooksService = require('../services/books.service');

const router = express.Router();
const service = new BooksService();


// Esta la parte para tener todos los libros
router.get('/', async (req, res) => {
  const books = await service.getBooks();
  res.status(200).json(books);
});

// Esta la parte para la creación de libros
router.post('/', async (req, res) => {
  const { body } = req;
  const newBook = await service.createBook(body);
  res.status(201).json(newBook);
});

module.exports = router;

Sin embargo esto apenas es la ruta toda la logica de negocio esta en un servicio llamdo booksservice y lo encontramos en la carpeta de service


const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books';
    this.mongoDB = new MongoLib();
    // Aca BooksService usa otra instancia es MongoLib 
  }

  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;

En BooksService tenemos definida la coleccion tenemos métodos para opbtener y para crear un libro .

Esta es un API ya en funcionamiento o al menos con un edpoit que es eso obenter libros y crear libros   
a traves de una base de datos de mongo 

MongoLib es una interfaz para conectarnos con nuestro diver en mongo


const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  async connect() {
    if (!MongoLib.connection) {
      await this.client.connect();
      MongoLib.connection = this.client.db(this.dbName);
      return MongoLib.connection;
    }
    return MongoLib.connection;
  }

  async getAll(collection, query) {
    const db = await this.connect();
    return db.collection(collection).find(query).toArray();
  }

  async get(collection, id) {
    const db = await this.connect();
    return db.collection(collection).findOne({ _id: ObjectId(id) });
  }

  async create(collection, data) {
    const db = await this.connect();
    const rta = await db.collection(collection).insertOne(data);
    return this.get(collection, rta.insertedId);
  }

  async update(collection, id, data) {
    const db = await this.connect();
    await db
      .collection(collection)
      .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    return this.get(collection, id);
  }

  async delete(collection, id) {
    const db = await this.connect();
    return db.collection(collection).deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = MongoLib;

Tiene  para conexion, y métodos curup es decir  de creación, actualización y eliminacion 

Este es todo el código base que vamos a necestiar para empezar hacer tanto  pruebas unitarias a cierto servicio y también de integración
