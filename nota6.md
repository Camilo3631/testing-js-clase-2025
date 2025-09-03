Coverage report

Reporte de coberatura

Es una medida pocentual que indica cuanto falta pro probar del 
código que va ir producción, cuál ya está probado, cual no se 
usa. ISO, la FAA exigen 100% de cobertura, pero en la realidad
no es tán así, por ejemplo hacer test a setter y getters puede
llegar a ser necesario, este 100% no garantiza que aparescan 
errrores ni que el mejor set de pruebas.

Cómo buscar el reporte de cobertura.

 npm run test -- --coverage

camiloacosta@MacBook-Air-de-Camilo demos % npm run test -- --coverage

> demos@1.0.0 test
> jest --coverage


✘ jest v30.0.5 is not yet supported in the Community edition of Console Ninja.
We are working hard on it for you https://tinyurl.com/3h9mtwra.

Estimated release dates:
  - Community users: around 21st September, 2025 (subject to team availability)
  - PRO users:       priority access is available now


✘ jest v30.0.5 is not yet supported in the Community edition of Console Ninja.
We are working hard on it for you https://tinyurl.com/3h9mtwra.

Estimated release dates:
  - Community users: around 21st September, 2025 (subject to team availability)
  - PRO users:       priority access is available now


✘ jest v30.0.5 is not yet supported in the Community edition of Console Ninja.
We are working hard on it for you https://tinyurl.com/3h9mtwra.

Estimated release dates:
  - Community users: around 21st September, 2025 (subject to team availability)
  - PRO users:       priority access is available now


✘ jest v30.0.5 is not yet supported in the Community edition of Console Ninja.
We are working hard on it for you https://tinyurl.com/3h9mtwra.

Estimated release dates:
  - Community users: around 21st September, 2025 (subject to team availability)
  - PRO users:       priority access is available now

 PASS  src/04-assertions.test.js
 PASS  src/05-statup.test.js
  ● Console

    console.log
      beforeAll

      at Object.log (src/05-statup.test.js:6:13)

    console.log
      beforeEach

      at Object.log (src/05-statup.test.js:16:13)

    console.log
      case 1

      at Object.log (src/05-statup.test.js:25:13)

    console.log
      afterEach

      at Object.log (src/05-statup.test.js:20:13)

    console.log
      beforeEach

      at Object.log (src/05-statup.test.js:16:13)

    console.log
      case 2

      at Object.log (src/05-statup.test.js:28:13)

    console.log
      afterEach

      at Object.log (src/05-statup.test.js:20:13)

    console.log
      beoforeAll

      at Object.log (src/05-statup.test.js:34:15)

    console.log
      beforeEach

      at Object.log (src/05-statup.test.js:16:13)

    console.log
      case 3

      at Object.log (src/05-statup.test.js:39:15)

    console.log
      afterEach

      at Object.log (src/05-statup.test.js:20:13)

    console.log
      beforeEach

      at Object.log (src/05-statup.test.js:16:13)

    console.log
      case 4

      at Object.log (src/05-statup.test.js:43:15)

    console.log
      afterEach

      at Object.log (src/05-statup.test.js:20:13)

    console.log
      afterAll

      at Object.log (src/05-statup.test.js:11:13)

 PASS  src/02-math.test.js
 PASS  src/03-voviantos.test.js
 PASS  src/06-person.test.js
 PASS  src/01-sum.test.js
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |   67.74 |    38.46 |     100 |   67.74 |                   
 01-sum.js     |     100 |      100 |     100 |     100 |                   
 02-math.js    |     100 |      100 |     100 |     100 |                   
 03-polonia.js |     100 |      100 |     100 |     100 |                   
 06-person.js  |      50 |    33.33 |     100 |      50 | 11,16-25          
---------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        4.293 s
Ran all test suites.
camiloacosta@MacBook-Air-de-Camilo demos % 

Para ispeccionarlo vemos un carpeta llamada coverage y vamos al archivo index lo abrimos en el navegador y vemos lo siguiente:



All files
67.74% Statements 21/31
38.46% Branches 10/26
100% Functions 7/7
67.74% Lines 21/31

Press n or j to go to the next uncovered block, b, p or k for the previous block.
Filter:
File 		Statements 		Branches 		Functions 		Lines 	
01-sum.js 	
	100% 	2/2 	100% 	0/0 	100% 	1/1 	100% 	2/2
02-math.js 	
	100% 	6/6 	100% 	2/2 	100% 	3/3 	100% 	6/6
03-polonia.js 	
	100% 	3/3 	100% 	0/0 	100% 	1/1 	100% 	3/3
06-person.js 	
	50% 	10/20 	33.33% 	8/24 	100% 	2/2 	50% 	10/20

Si le damos click a person vemos que es lo que nos falta por probar 


Rangos de referencia

 • 80% → Bueno para la mayoría de proyectos.

 • 90% → Excelente, usado en entornos de alta calidad.

 • 100% → Solo en casos muy específicos, depende del proyecto y del tiempo disponible.

