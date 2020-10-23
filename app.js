var PORT = process.env.PORT || 3000;
//import package
//server
const express = require('express');
const app = express();
//database
const mongoose = require('mongoose');
//body parser
const bodyParser = require('body-parser');
//cors
const cors = require('cors');
//secret params
require('dotenv/config');

//MIDDLEWARE:
//cors: public access
app.use(cors());
//middleware body parser
app.use(bodyParser.json());


//import routes
const dataRoute = require ('./routes/dataPPG');
//MIDDLEWARE dari URL HOME/post ke postsRoutes
app.use('/dataPPG', dataRoute);


//ROUTE: neghubungin ke post dan get dkk
app.get('/', (req,res) => {
	res.send('BySonics Home Base Server');
});


//Connect to DB
mongoose.connect(
	process.env.DB_CONNECT_URL,  
	{useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connect to DB moongoose compass'),
);
// const dbBySonics = db.db('BySonics');
// const collectionUser = dbBySonics.collection(User);


//start LISTEN AT PORT:
app.listen(PORT, ()=> console.log('Server running at http://0.0.0.0:8080/'));