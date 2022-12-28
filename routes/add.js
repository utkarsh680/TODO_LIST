const express = require('express');

const router = express.Router();
router.use(express.urlencoded());


const addController = require('../controllers/add_controller');
const { route } = require('./delete');

router.post('/create-task', addController.add);

module.exports = router;