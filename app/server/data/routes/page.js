const express = require('express');
const router = express.Router();
const ControllerPage = require('../controllers/ControllerPage')
const ControllerFile = require('../controllers/ControllerFile')

router.get(`/`, ControllerPage.getAllPage);
router.get(`/:id`, ControllerPage.getFindPage);
router.post('/create', ControllerPage.createPage)
router.put('/update/:_idPage/:methode', ControllerFile.upload.single('contents[image]'), ControllerPage.updatePage)
router.delete('/delete/:id', ControllerPage.deletePage)

module.exports = router;