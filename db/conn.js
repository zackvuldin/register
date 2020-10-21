///////////////////////////
// Environmental Variables
///////////////////////////
require('dotenv').config();

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////
const { MONGODBURI } = process.env;
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

// connect
mongoose.connect(MONGODBURI, config);

DB.on('open', () => console.log('Connected to Mongo'))
	.on('close', () => console.log('Disconnected to Mongo'))
	.on('error', (error) => console.log(error));

// export the connection
module.exports = mongoose;
