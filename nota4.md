En Jest hay cláusulas para isolar las pruebas, donde un escenario de pruebas no afecte a otro, para ello se agrupan los casos con describe().

Teardown se trata de demoler o quitar casos de prueba anteriores para que no afecten en el actual al usar los hooks, que son sentencias adicionales según el tiempo de ejecución del grupo o los casos.

Veamos ahora como hacer esto:

· describe : Reune un conjunto de pruebas, mejora la lectura del código y  la encapsulación. 

· beforeAll: es una sentencia de [stup] que corre antes todas las pruebas xej up db
   este tipo de utlidad se puede llamar hook y representa al alcance o scope del grupo (describe).

· afterAll(): se ejecuta después de todas las pruebas.

· beforeEach(): se ejecuta antes de cada prueba.

· afterEach(): se ejecuta después de cada prueba.

Nota no es buena prática usar console.log en produción.
