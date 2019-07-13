import express from 'express';
import config from './config/config';
import database from './config/database.config';

const port = process.env.PORT || 5033;
const env = process.env.NODE_ENV || 'developement';


const app = express();

// Middlewares
// Bodyparser Middleware
app.use(express.json());

// Connect with mongoDB
database(config[env]);

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (env === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, console.log(`Server running at http://localhost:${port}`));