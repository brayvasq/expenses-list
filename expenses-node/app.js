const express = require('express'); // Mini Framework para node
const bodyParser = require('body-parser'); // Dependecia para parsear a json las respuestas
const mongoose = require('mongoose'); // Dependencia para interactuar con mongo db

const expense = require('./routes/expense.route'); // Rutas de la aplicación
const app = express();

let port = 5040;
let dev_db_url = 'mongodb://localhost:27017/expenses';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/**
 * Configuración de CORS para todas las rutas
 */
app.all("/*", (req, res, next) => {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});
// Indicando las rutas de la aplicación
app.use('/expenses',expense);

/**
 * Método que ejecuta la aplicación
 *
 * @param port puento en el que va a ejecutarse la aplicación
 */
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})