const express = require('express');
const router = express.Router();
const httpStatus = require('http-status-codes');
const healthController = require('../controllers/health.controller');

router.get('/status', async (req, res) => {
    const status = await healthController.serverStatus();
    res.status(httpStatus.OK).send(status);
});

router.get('/sensorstatus', async (req, res) => {
    const status = await healthController.sensorStatus();
    res.status(httpStatus.OK).send(status);
});

module.exports = router;