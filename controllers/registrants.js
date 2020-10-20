// Not sure if I need to require express here.
const Registrant = require('../models/Registrant');

// Add controller to list all registrants
const getAllRegistrants = (req, res) => {
	Registrant.find({}).then((registrants) => {
		res.status(200).json({
			status: 200,
			registrants,
		});
	});
};

// Add controller to find registrant buy id

// Add controller to create new registrant
const createRegistrant = (req, res) => {
	const body = req.body;
	Registrant.create(body).then((registrant) => {
		Registrant.find({}).then((registrants) => {
			res.status(200).json({
				status: 200,
				msg: `Updated ${registrant.id}: ${registrant.name}`,
				registrants,
			});
		});
	});
};

// Add controller to update registrant
const updateRegistrant = (req, res) => {
	const body = req.body;
	Registrant.findOneAndUpdate({ _id: req.params.id }, body).then(
		(registrant) => {
			Registrant.find({}).then((registrants) => {
				res.status(200).json({
					status: 200,
					msg: `Updated ${registrant.id}: ${registrant.name}`,
					registrants,
				});
			});
		}
	);
};

// Add controller to delete registrant
const deleteRegistrant = (req, res) => {
	Registrant.findOneAndDelete({ _id: req.params.id }).then((registrant) => {
		Registrant.find({}).then((registrants) => {
			res.status(200).json({
				status: 200,
				msg: `Deleted ${registrant.id}: ${registrant.name}`,
				registrants,
			});
		});
	});
};

// Export all controller functions
module.exports = {
	getAllRegistrants,
	createRegistrant,
	updateRegistrant,
	deleteRegistrant,
};
