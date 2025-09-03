Generando Fake Books

Fake: Simulan un objeto real y sirven para suplantar ciertos datos y comportamiento de forma de dínamica en nuestro caso (libro).

Para generar nuestra datafake tenemos que seguir los siguientes pasos:

1. Entramos a la siguiente página: 

https://fakerjs.dev/

2. Le damos al clcik boton Get Started y buscamos el istlador para istarlo:

3. Para isatarlo con npm usamdo el siguiente comando:

npm install @faker-js/faker --save-dev

4. Para trabajar con fake usamos el siguiente comando por importación.

import { faker } from '@faker-js/faker';

5. Para emepzar a trabajarlo en nuestro proyecto cramos dentro de la carpeta src una subcarpeta llamada fakes

6. Dentro de la carpeta fakes generamos un archivo llamado books.fakes.js en cual comensamos a generar el siguiente archivo que es el encargado de generar libros de forma fakes (dinamicá) :


// Importamos fake
const { faker } = require('@faker-js/faker')


// function generarteOnebook es decir generar un libro 
const generateOneBook = () => ({
    // Un id paracido la mongo (base datos)
    _id: faker.datatype.uuid(),
    // Nombre con la api de comerce
    name: faker.commerce.productName(),
    // le pomemos a nuestro libro un precio
    price: faker.commerce.price(),
});
// Función generateManyBook es decri muchos libros con  el tamaño de parámetro
const generateManyBook = (size) => {
    const limit = size ?? 10; // Si no me envian el tamaño genera 10 libros
    const fakeBooks = []; // Colocado los fakeBooks generados
    for (let index = 0; index < limit; index += 1) {
        fakeBooks.push(generateOneBook());// Generamos un array de libros iterando uno por uno
    }
    return [...fakeBooks]; // Para evitar errores de mútación un solo libro de la 
}


module.exports = { generateOneBook, generateManyBook };

7. Para emepzar a trabajar en nuestro test (esencarios de pruebas)



  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Para este ecenario de prueba puedo tener fakeBooks y usamos nuestra función que nos genera 20 libros
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      // el tamaño es igual al tamaño de libros que mande a simular.
      expect(books.length).toEqual(fakeBooks.length)
      // Espiamos los libros (si fue o no llamado)
      expect(mockGetAll).toHaveBeenCalled();
      // Tambien puedo hacer cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // Preguntamos con que arguamentos fue llamdo 'books' y un objeto vacio
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list of books', async () => {
      // Arrange
      // para este siguiente caso de prueba generamos 4 libros con nuestra funcion de generateManyBook();
      const fakeBooks = generateManyBook(4)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      // el libro que la primra posición.
      expect(books[0].name).toEqual(fakeBooks[0].name)  
    });
  });
});









