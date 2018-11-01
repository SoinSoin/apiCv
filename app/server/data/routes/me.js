const express = require('express');
const router = express.Router();
const ControllerMe = require('../controllers/ContollerMe')
const ControllerFile = require('../controllers/ControllerFile')

// Crud for entity me is ok 
router.get(`/`, ControllerMe.getAllMe);
router.get(`/:id`, ControllerMe.getFindMe);
router.post('/create', ControllerFile.upload.fields([{
    name: 'image',
    maxCount: 1
}, {
    name: 'papercv',
    maxCount: 1
}]), ControllerMe.createMe)
router.put('/update/:id', ControllerFile.upload.fields([{
    name: 'image',
    maxCount: 1
}, {
    name: 'papercv',
    maxCount: 1
}]), ControllerMe.updateMe)
router.delete('/delete/:id', ControllerMe.deleteMe)

module.exports = router;