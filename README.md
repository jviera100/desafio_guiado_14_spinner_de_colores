Ejercicio guiado
Spinner de colores
Desarrollar un servidor que reciba en su ruta raíz un parámetro con el nombre de un color
según las variantes de colores de bootstrap. Este parámetro será enviado a través del
render a una vista “Inicio”, la cual importará 2 parciales:
● Botones: Contendrá el helper “each” para iterar un arreglo de colores.
● Spinner: Contendrá el componente spinner de Bootstrap, en donde su variante de
color será igual a un parámetro “color” enviado desde el render.
El objetivo será programar que al ser presionado un botón de color “success”, por
ejemplo, se consulte al servidor pasando como parámetro de la URL esta variante de
color y ¿Cómo redireccionaremos al usuario luego del click en el botón? Usaremos las
etiquetas de ancla, concatenando de forma dinámica el color en el atributo “href”.
Paso 1: Crear una plantilla dentro de
la carpeta “views” llamado
“Inicio.handlebars” que contenga el
siguiente código:
● En esta plantilla lo que se hace es:
● Importar Bootstrap.
● Diseñar la maqueta con
código HTML y clases de
Bootstrap.
● Importar 2 parciales: Botones
y Spinner.
● Paso 2: Crear una plantilla dentro de la carpeta “componentes” llamada
“Botones” y escribe el siguiente código.
En esta plantilla estamos iterando un arreglo llamado “colores” que será pasado
como parámetro dentro del método render, es importante que sepas que aunque
este parámetro se está pasando a la vista “Inicio”, todos los parciales hijos también
podrán acceder a este dato. 
● Paso 3: Crear una plantilla dentro de la carpeta “componentes” llamada
“Spinner” y escribe dentro el siguiente código:
Esta plantilla estará mostrando el componente spinner de Bootstrap, pero la
variante de color será un parámetro “color” enviado desde el render en el servidor.
● Paso 1: Crear un servidor con Express e integra handlebars definiendo en su
configuración las rutas para el consumo de vistas y componentes.
● Paso 2: Crear un middleware que publique la carpeta “css” de Bootstrap localizada dentro
de los node_modules.
● Paso 3: Crear una ruta raíz que reciba un parámetro “color”.
● Paso 4: Utilizar destructuring para extraer la propiedad color de los parámetros de la
consulta con el objeto request.
● Paso 5: Ocupar el método render para renderizar la plantilla Inicio y pasar como
parámetros un arreglo con todas las variantes de colores de Bootstrap y una propiedad
“color” cuyo valor será el recibido como parámetro en la ruta
● Ha llegado el momento de la verdad, levanta el servidor y consulta la siguiente
ruta: http://localhost:3000/danger, deberás ver lo que se muestra en la
siguiente imagen:
Muy bien, se está renderizando todo sin problema, sin embargo, falta probar lo más
importante, que es el cambio dinámico del color del spinner, para esto haz click en
el botón “primary” y deberás recibir lo que se muestra en la siguiente imagen:
