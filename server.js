const express = require('express')

const app = express()

//Importar conexión mongoDB
const archivoBD = require('./conexion')

//Importación del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

// usar estáticos cuando esta en modo produccion //
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get("*", (req, res) => {
        res.sendFile((__dirname + "/frontend/build/index.html"));
    })
    }
    
    
    // cambio de puerto en heroku
    let port = process.env.PORT;
    if (port == null || port == "") {
    port = 5000;
    }  


//Configurar server básico
app.listen(port, function(){
    console.log('El servidor NODE está corriendo correctamente')
})