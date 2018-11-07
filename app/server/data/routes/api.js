const express = require('express');
const router = express.Router();
const ControllerApi = require('../controllers/ControllerApi')

router.get(`/page`, ControllerApi.getPageApi)
router.get(`/me`, ControllerApi.getMeApi)

module.exports = router;