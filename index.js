const express = require('express');
const monggose = require('mongoose');
const app = express();
require('dotenv').config();;
const port = process.env.PORT;
const routerApi = require('./src/routes');



/* port listening */
app.listen(port, ()=> console.log('Listening', port));

/* Conection BD */
monggose.connect(process.env.MONGODB_STRING_CONECTION)
.then(()=>console.log('Okey conection MongoDB'))
.catch((error)=>console.log(error));


/* responde format JSON */
app.use(express.json());


routerApi(app);
