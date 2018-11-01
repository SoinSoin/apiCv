const express = require('express');
const router = express.Router();
const ControllerPage = require('../controllers/ControllerPage')
const ControllerFile = require('../controllers/ControllerFile')

router.get(`/`, ControllerPage.getAllPage);
router.get(`/:id`, ControllerPage.getFindPage);
router.post('/create', ControllerFile.upload.fields( [{name: 'image'}] ), ControllerPage.createPage)
router.put('/update/:id', ControllerFile.upload.single('image'), ControllerPage.updatePage)
router.delete('/delete/:id', ControllerPage.deletePage)

module.exports = router;