const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/api');

const app = express();

//Bodyparser middlewar
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db).then(()=> console.log('mongodb connected')).catch(err=> console.log(err));

//use routes
app.use('/api/api',items);

// running the server on port
const port =process.env.port || 5000;
app.listen(port,()=> console.log('server is started on port ${port}'));
