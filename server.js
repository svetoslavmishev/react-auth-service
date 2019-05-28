const express = require('express');
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'developement';
const config = require('./config/config');
const database = require('./config/database.config');


const app = express();

// Middlewares
app.use(express.json());

// Connect with mongoDB
database(config[env]);

// Routes
app.use('/', require('./routes/api/index'));
app.use('/auth', require('./routes/api/users'));


app.listen(port, console.log(`Server running at http://localhost:${port}`));