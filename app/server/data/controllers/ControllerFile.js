const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || 'image/png' || 'image/jpg' || 'image/svg')
            destFile = 'images/'
        if (file.mimetype === 'application/pdf')
            destFile = 'files/'
        return cb(null, `./public/uploads/${destFile}`);
    },
    filename: (req, file, cb) => {
        return cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 'image/png' || 'image/jpg' || 'image/svg' || 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

module.exports = {
    upload: upload
}