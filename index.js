const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static('assets')); 

const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"]; 

app.get('/', (req, res) => { 
  res.send('⭐⭐⭐⭐⭐🎉¡Bienvenido a la página de inicio!🎉⭐⭐⭐⭐⭐');
});
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({ usuarios });
});
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario_ruta = req.params.usuario 
  const isUser = usuarios.map((u) => u.toLowerCase()).includes(usuario_ruta.toLowerCase()); 
  isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg");     
  }); 
app.get('/abracadabra/juego/:usuario', (req, res) => { 
  res.sendFile(__dirname + '/index.html')             
});    
app.get('/abracadabra/conejo/:n', (req, res) => { 
  const n = req.params.n 
  const numero = Math.floor(Math.random() * (5 - 1)) + 1; 
  if (n == numero) {
      res.sendFile(__dirname + '/assets/img/conejito.jpg'); 
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg'); 
  }
});  
app.get('*', (req, res) => {
  res.send("<center><h1>🤣🤣🤣🤣🤣Esta página no existe...🤣🤣🤣🤣🤣 </h1></center>");
});
app.listen(port, () => {
  console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
});