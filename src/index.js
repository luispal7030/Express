const express = require('express');
const path =require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');


// Inicializaciones
const app = express();

// Settings 
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));

app.set('view engine', '.hbs')

// Middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(session({
    secret: 'enviroment',
    resave: true,
    saveUninitialized: true
}))

// Routers
app.use(require('./routers/index'));
app.use(require('./routers/note'));
app.use(require('./routers/users'));


// Static Files
// Server is Listening
app.listen(app.get('port'), () => {
    console.log('Server activo en puerto', app.get('port'));
});