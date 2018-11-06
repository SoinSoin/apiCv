const express = require('express');
const router = express.Router();
const ControllerPage = require('../controllers/ControllerPage')
const ControllerFile = require('../controllers/ControllerFile')

router.get(`/`, ControllerPage.getAllPage);
router.get(`/:id`, ControllerPage.getFindPage);
router.post('/create', ControllerFile.upload.single('image'), ControllerPage.createPage)
router.put('/update-add/:_id', ControllerFile.upload.single('image'), ControllerPage.updatePageAdd)
router.put('/update-remove/:_idPage/:_idContent',  ControllerPage.updatePageRemove)
// router.delete('/delete/:id', ControllerPage.deletePage)

module.exports = router;