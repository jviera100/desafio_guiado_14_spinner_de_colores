//-- iniciar json => npm init -y => crea json con toda configuracion inicial
//-- agrega carpetas modules, json y lock => npm i express o npm install o npm install express --save

// Requerimiento 0: Crear un servidor con Node en el puerto 3000
//const http = require('http');
//const port = 3000;
//http.createServer((req, res) => {
//  if (req.url == "/inicio" && req.method == "get") {
//    res.end("hola mundo! servidor con node js puro");    //.end no .send
//  }
//})
//.listen(port, () => {                                    //.listen no app.listen
//  console.log(`🔥Servidor corriendo en el puerto🔥http://localhost:${port}`);
//});
// Requerimiento 1: Crear un servidor con Express en el puerto 3000
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //si no encuentra el puerto pone 3000

// Requerimiento 2: Definir la carpeta “assets” como carpeta pública del servidor
app.use(express.static('assets')); //middleware carpeta publica => en html y css no pones assets, en js si lo pones para ruta archivos.

// Requerimiento 3: Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"]; //arreglo
//ruta raiz
app.get('/', (req, res) => { //req consulta y res respuesta
  res.send('⭐⭐⭐⭐⭐🎉¡Bienvenido a la página de inicio!🎉⭐⭐⭐⭐⭐');
});
//ruta devuelve json
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({ usuarios });
});
// Requerimiento 4: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario_ruta = req.params.usuario //aqui capturamos el usuario de la ruta dinamica
  const isUser = usuarios.map((u) => u.toLowerCase()).includes(usuario_ruta.toLowerCase()); //aqui verificamos si el nombre de la ruta esta en el array
//tolowercase es para buscar usuario con mayuscula o minuscula
  isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg");     //captura imagen incognita      
  }); 

app.get('/abracadabra/juego/:usuario', (req, res) => { //ruta devuelve imagen incognita
  res.sendFile(__dirname + '/index.html')              //ruta nombre array devuelve html 
});                            //ejemplo: http://localhost:3000/abracadabra/juego/astrid
// Requerimiento 5: Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.
app.get('/abracadabra/conejo/:n', (req, res) => { 
  const n = req.params.n //aqui capturamos el numero de la ruta dinamica
  const numero = Math.floor(Math.random() * (5 - 1)) + 1; //numero aleatorio
  if (n == numero) {
      res.sendFile(__dirname + '/assets/img/conejito.jpg'); // Devolver imagen del Conejo si coincide
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg'); // Devolver imagen de Voldemort si no coincide
  }
});  
// Requerimiento 6: Crear una ruta genérica que devuelva un mensaje para rutas no definidas
app.get('*', (req, res) => {
  res.send("<center><h1>🤣🤣🤣🤣🤣Esta página no existe...🤣🤣🤣🤣🤣 </h1></center>");
});//windows + . = inserta iconos

// Iniciar el servidor => muestra enlace ruta string e invoca numero de port
app.listen(port, () => {
  console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
});//levantarmiento servidor

// levanto desde JS
// levanto servidor => node index
// cancelo servidor => ctrl c  => te deja volver a escribir en terminal 

//----levanto desde packageJSON----
//--A)--sin watch (con start): automatizar levantamiento servidor con cancelacion en terminal
//"scripts": {
//  "start": "node index.js"
//},
//--terminal-- => npm start <= --npm nombre_script -- con start no se digita run

//--B)--con watch (con server): automatizar levantamiento servidor automaticamente, sin cancelacion en terminal
//"scripts": {
 // "server": "node --watch index.js"
//},
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--C)--Con nodemon (con server):
//"scripts": {
//  "server": "nodemon index.js"
//}
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--D)--Con nodemon y watch (con server):
//"scripts": {
//  "server": "nodemon --watch index.js"
//}
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//----THUNDER CLIENT--
//usar extencion de visual thunder client o postman para usar la url en visual

//----GITIGNORE--
//para ignorar carpeta node_modules para no subir a github en archivo gitignore digitar node_modules/*
