Assertions o matchers son los elementos clave que usamos para validar escenarios de prueba específicos en el testing con JavaScript.

Cada matcher nos permite comprobar si un resultado esperado coincide con el resultado real obtenido del código, asegurando que cada caso concreto funcione correctamente. Sin estas herramientas, no podríamos verificar de manera precisa que nuestro programa cumple con los requisitos en distintas situaciones.


1. toEqual : Se usa para objetos

2. toBeNull : Nulo

3. toBeDefined : Definido

4. .toBeUndefined(); Indefinido pero se puede por not es para negarlo
 
5.   expect(true).toEqual(true); se usa para booleano
     expect(false).toEqual(false);

6. Si esta vacía, o false, son valores falsy, por eso usamos toBeFalsy

 expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();

7. strings usamos   toMatch verifica que el string contiene el patrón

  expect('welcome to spain').toMatch(/spain/)

8. list o array usamos   toContain verifica que el array or list contenga el elemento

test('list / arrys', () => {
  const numbers = [1 ,2 ,3, 4];
  //  toContain verifica que el array contenga el elemento
  expect(numbers).toContain(3)
})
     