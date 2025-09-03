Las pruebas estáticas se caracterizan por no ejecutar código, solo lo analizan y nos dan un feedback temprano

Estas nos ayudan a ver si estamos teniendo buenas praticas al escribir nuestro códig.

Hay herrmientas que nos ayudan a ejecutar estas pruebas estáticas como lo son:

 •  ESLint

 • Prettier

 • TypeScript

Pasos para istarlo y configurar Eslint:


1. 

 Vamos a empezar a crear pruebas estáticas con ESLint, para esto debemos instalarlo:

 npm i -D eslint

 2. Luego de instalarlo, vamos a ejecutar el siguiente comando que nos permitirá traer ciertas configuraciones y establecer configuraciones por defecto:

 npx eslint --init

 3. Si nos arroja un archivo llamado eslint.config.msj lo eliminamos y creamos el siguiente archivo que se llama .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'no-trailing-spaces': 'error',

  },
};

 // Desactiva la regla que verifica si las rutas de importación existen o son resolubles.
    // Útil cuando usas alias, rutas dinámicas, o configuraciones que ESLint no puede entender.
    'import/no-unresolved': 'off',

    // Activa error si hay espacios en blanco al final de una línea.
    // Esto ayuda a mantener el código limpio y evita cambios innecesarios en git.
    'no-trailing-spaces': 'error',

4.     Primero, elimina la versión actual si está instalada (localmente):

npm uninstall eslint

5.     Luego, instala la versión que quieres, especificándola exactamente (sin el ^ para evitar instalar una versión mayor):

npm install eslint@8.57.1 --save-dev

6.  Instalar configuración Airbnb base (sin React)

Para usar la configuración Airbnb sin React, debes instalar el paquete eslint-config-airbnb-base y sus dependencias:

npm install eslint-config-airbnb-base eslint-plugin-import --save-dev

7. dentro del package.json ponemos estos dos comandos 

  "lint": "eslint src/**",
    "lint:fix": "eslint src/** --fix"


  "lint": "eslint src/**", : nos muestra la lista de errores

   "lint:fix": "eslint src/** --fix" nos corrije los errores.

7. Cómo usarlo

    Para analizar el código:

npm run lint

    Para corregir automáticamente errores:

npm run lint:fix
    
Comentarios

    Eliminar el archivo eslint.config.mjs si se genera, para evitar conflictos con .eslintrc.js.

    Asegúrate que el código fuente está dentro de la carpeta src, o modifica la ruta en los scripts si usas otra carp