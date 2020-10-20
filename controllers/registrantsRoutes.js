const express = require('express');
const router = express.Router();

// Require registrant controller
const controller = require('./registrants');

// Add route to list all registrants
router.get('/', controller.getAllRegistrants);

// Add route to get registrant by id

// Add route to create registrant
router.post('/', controller.createRegistrant);

// Add route to update registrant
router.put('/:id', controller.updateRegistrant);

// Add route to delete registrant
router.delete('/:id', controller.deleteRegistrant);

module.exports = router;
