const express = require('express');
const app = express();

const { config } = require ('./config/index');
const moviesApi = require('./routes/movies.js');
const { 
    logErrors, 
    wrapErrors,
    errorHandler 
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

// body parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404 error 
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config, function() {
    console.log(`Listening http://localhost:${config.port}`);
});