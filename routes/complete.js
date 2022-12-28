const express = require('express');

const router = express.Router();

const completeController = require('../controllers/complete_controller');

router.get('/complete-task', completeController.complete);

module.exports = router;