

Creando el proyecto

1. Creamos el .gitignore: para poder ignorar los archivos. Lo generamos desde la aplicación web de gitignore.io.  
Seleccionamos los sistemas operativos a ignorar: Windows, macOS y Linux. Una vez hecho esto le damos en crear,  
copiamos el archivo y lo llevamos al proyecto, y lo pegamos en el archivo .gitignore que es el archivo genérico.

2. Creamos unos folders o carpetas que son los siguientes:

• api  
• demos  
• webapp  

Y generamos este archivo:  
.editorconfig

Buscamos en Google "editor config Airbnb".

.editorconfig nos sirve para espaciado: es la extensión del Visual Code.  
Seleccionamos el archivo, lo pegamos en Visual Code en el editorconfig.

Para trabajar en el proyecto: entramos en la carpeta demos desde la terminal:  

ponemos este comando:  
npm init -y  

Esto genera un package.json que es el siguiente:

{
  "name": "demos",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

Cómo va un proyecto con base a Node.

Después vamos a crear un .gitignore de acuerdo al caso.  
También lo generamos desde gitignore.io.  
Lo ponemos dentro de la carpeta de demos: en el .gitignore.

Esto es una configuración frecuente cuando se manejan monorepos, es decir, muchos repositorios dentro de uno mismo.

Ahora vamos a instalar nuestra primera herramienta para testing: https://jestjs.io/

Le damos click a GET STARTED:

npm install --save-dev jest  
Ejecutamos este comando en la terminal desde la carpeta demos. Lo instalamos gracias a npm.

Dentro de la carpeta demos creamos una subcarpeta llamada src:

1. Creamos el primer test: 01-sum.js que es el siguiente código:

function sum(a, b) {
  return a + b;
}
module.exports = sum;

2. Creamos un archivo nuevo llamado sum.test.js —es la forma que Jest va a reconocer los archivos de prueba y ejecutar:

const sum = require('./01-sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

3. Dentro del package.json hay un script para test: ponemos 'jest'

4. En la terminal en la carpeta demos ejecutamos:  
npm run test

Resultado:

44 packages are looking for funding  
  run `npm fund` for details

found 0 vulnerabilities  
camiloacosta@MacBook-Air-de-Camilo demos % npm run test

> demos@1.0.0 test  
> jest

 PASS  src/01-sum.test.js  
  ✓ adds 1 + 2 to equal 3 (3 ms)

Test Suites: 1 passed, 1 total  
Tests:       1 passed, 1 total  
Snapshots:   0 total  
Time:        0.788 s  
Ran all test suites.  
camiloacosta@MacBook-Air-de-Camilo demos %  

es decir, exitoso


