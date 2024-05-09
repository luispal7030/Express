const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Se utiliza para evitar los mensajes de advertencia relacionados con la topología del servidor.
    // Opcional: useCreateIndex y useFindAndModify ya no son necesarias en las versiones más recientes
}).then( db => console.log('DB is connected')).catch(
    err => console.error(err)
);
