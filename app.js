const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
require('dotenv').config() 


//Conexión a Base de Datos: 
const mongoose = require('mongoose'); 


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ijeqpq1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; 

async function main() {
  await mongoose.connect(uri);
}

main().catch(err => console.log(err));
main().then(()=> console.log("Base de datos conectada"));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/Mascotas'))

app.listen(port, ()=>{
  console.log("Servidor a su servicio en el puerto 3000 ",port) ;
});

/*
app.use((req, res,next)=> {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Título del sitio web"
  });
}); */