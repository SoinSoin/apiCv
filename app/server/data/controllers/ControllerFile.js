const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.baseUrl === '/me')
            destFile = 'images/me/'
        if (req.baseUrl === '/page')
            destFile = 'images/page/'
        if (req.baseUrl === '/page')
            destFile = 'images/page/'
        if (file.mimetype === 'files/pdf')
            destFile = 'files/pdf/'
        return cb(null, `./public/uploads/${destFile}`);
    },
    filename: (req, file, cb) => {
        return cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/svg' || file.mimetype === 'image/pdf') {
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