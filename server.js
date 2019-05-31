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
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


app.listen(port, console.log(`Server running at http://localhost:${port}`));