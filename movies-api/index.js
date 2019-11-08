const express = require('express');
const app = express();

const { config } = require ('./config/index');
const moviesApi = require('./routes/movies.js');

//middleware del bodyparser
app.use(express.json());

moviesApi(app);


app.listen(config, function() {
    console.log(`Listening http://localhost:${config.port}`);
});