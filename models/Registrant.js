// import connection
const mongoose = require('../db/connection');

// creating Schema with registrant
const RegistrantSchema = mongoose.Schema(
	{
		name: String,
		age: Number,
		eventStatus: Boolean,
	},
	{ timestamps: true }
);


// export model
const Registrant = mongoose.model('registrant', RegistrantSchema);

// exporting registrant 
module.exports = Registrant;
