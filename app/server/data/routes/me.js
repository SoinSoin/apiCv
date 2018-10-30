const express = require('express');
const router = express.Router();
const ControllerMe = require('../controllers/ContollerMe')
const ControllerFile = require('../controllers/ControllerFile')

router.get(`/`, ControllerMe.getAllMe);
router.get(`/:id`, ControllerMe.getFindMe);
router.post('/create', ControllerFile.upload.single('image'), ControllerMe.createMe)
router.put('/update/:id', ControllerFile.upload.single('image'), ControllerMe.updateMe)
router.delete('/delete/:id', ControllerMe.deleteMe)

module.exports = router;