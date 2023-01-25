const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kgnunez:blbkD0pz8yPuA5mB@cluster0.kesacsi.mongodb.net/connection_ssh?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./rutas/usuario');
