const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//for having the environment variables in dotenv file and not in the local system
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true,  useCreateIndex : true});

const db_connection = mongoose.connection;
db_connection.once('open', ()=> {
    console.log("MongoDB connection established!")
})

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is now running on the port :${port}`);
});


