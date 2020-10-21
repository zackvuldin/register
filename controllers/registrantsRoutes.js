const express = require('express');
const router = express.Router();

// registrant controller
const controller = require('./registrants');

// all registrants
router.get('/', controller.getAllRegistrants);


// create registrant
router.post('/', controller.createRegistrant);

// update registrant
router.put('/:id', controller.updateRegistrant);

// delete registrant
router.delete('/:id', controller.deleteRegistrant);

module.exports = router;
