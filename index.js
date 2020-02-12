let express = require('express');
let router = require('./routes.js');
let mongoose = require('./models.js');
let bodyParser = require('body-parser');
const connectDB = require('./connection.js');

let app = express();

connectDB();

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api',router);

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message});
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log('listening for request...');
});