Mocking, Stub, doubles

DOUBLES
 
Son elementos que nos sirven para simular atributos, comportamientos, métodos en nuestro entorno de pruebas. Realmente hay bastante terminoglogia donde se refiere 
casi a lo mismo o es muy dificil diferenciar que es uno de otro de por si existe
la terminologia de Mocking, Stub, face, dummies, etc sin embargo con la idea principal de esto es utilizar elementos que nos sirvan para reemplzar ciertos comportamientos en nuestra prueba. 

Recuerda por ejemplo las pruebas unitarias sueleen abstraer o hacer mocking precisamente es suplantar todas las dependecias para hacer y enfocarse en la
fuente o funcionalidad de ese método o esa clase en especifico y todas sus
dependecias emepizan a mokiarlas si se puede decir de una menera, que seria
hacer el acto de Moking o empezar a suplantar esos servicios.

A continuacion estaremos hablando de una serie de conecptos y terminas que usa en la industria y vamos a ver como los vamos a diferenciar:

1. Dummy: Son datos ficticios y se usan para rellenar información.

2. Fake: Son más complejos simulan el comportamiento de un objeto real y sirven para
   suplantar ciertos datos y comportamientos.

   son objetos que simulan comportamientos o datos; como un usuario ficticio.

3. Stubs: Son más complejos y tienen mucha importancia hacia el momento de hacer
   pruebas. 

   Imaginate nuestra API y se conecta a otra api de terceros podrias utlizar 
   conectarte una api del clima, conectarte por ejemplo a una aplicación de 
   auntentificación cómo cero, etc diremos que nos conectamos a un tercero
   allí nostros podemos generar un stobing preisamente para hacer esa simulacion
   de ese comportamiento y luego en pruebas podemos ver precisamente para hacer
   esa simulación de ese comportamiento y luego en pruebas podemos ver precisamente
   si se comporto de la menra correcta, pero realmente no es llamada a la API Real,
   sino una simulación con respuestas preparadas de lo que es ese servicio nos contesta.
   
   Proveen respuestas preparadas y se pueden llamar durante el test para
   simular un comportamiento. 

4. Spies: Son como los Stubs, pero ahora vamos a poder spiar ciertos elementos
    o ciertos comportamientos de como fue llamado a su método, cuantas veces fue
    llamdo con que parámetors fue llamado, cuantas veces fue llamado, com que parámetros fue llamdo precisamente espimamos todo eso y nos podemos basar en ello
    para hacer pruebas de caja blanca en donde vemos el comportamiento de un método en especifico.

5.  Mocks: Stubs + Spies, pueden estar pre-programados para enviar las respuestas    
    supuestas.


   
