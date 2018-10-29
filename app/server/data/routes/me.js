const express = require('express');
const router = express.Router();
const multer = require('multer');
const ControllerMe = require('../controllers/ContollerMe')
// faire un controller.
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/uploads/images/');
    },
    filename: (req, file, cb) => {
        return cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({
    storage: storage,
});

// mes routes;
router.get(`/`,ControllerMe.getAllMe);
router.get(`/:id`, ControllerMe.getFindMe);
// post :  manque pdf.
router.post('/create', upload.single('image'), ControllerMe.createMe)
router.put('/update/:id', upload.single('image'), ControllerMe.updateMe)
router.delete('/delete/:id',ControllerMe.deleteMe)


// // delete: ok
module.exports = router;

//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb