const mongoose = require('./connection');
const registrant = require('.../models/Registrant');

Registrant.deleteMany({}).then(() => {
	Registrant.create({
		name: 'Tim Cook',
		companyName: 'Apple',
		eventStatus: true,
	}).then(() => {
		process.exit();
	});
	Registrant.create({
		name: 'Donald Trump',
		companyName: 'Republican',
		eventStatus: true,
	}).then(() => {
		process.exit();
	});
});
Registrant.create({
	name: 'Joe Biden',
	companyName: 'Democrats',
	eventStatus: true,
}).then(() => {
	process.exit();
});
Registrant.create({
	name: 'Jeff Kaplan',
	companyName: 'Blizzard',
	eventStatus: false,
}).then(() => {
	process.exit();
});
