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





