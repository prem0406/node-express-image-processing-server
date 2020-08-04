const router = require('express').Router();
const multer = require('multer');

module.exports = router;

function filename(request, file, callback){
    callback(null, file.originalname);
}

const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename: filename
});

function fileFilter(request, file, callback){
    if(file.mimetype === 'image/png'){
        request.fileValidationError = 'Wrong File Type';
        callback(null, false, new Error('Wrong File Type'));
    } else {
        callback(null, true);
    }
}

const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

router.post('/upload', upload.single('photo'),(request, response) =>{
    if(request.fileValidationError) {
        return response.status(400).json({
            error: request.fileValidationError
        });
    } else {
        response.status(201).json({
            success: true
        })
    }
})