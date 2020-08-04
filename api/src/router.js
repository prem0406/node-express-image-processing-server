const router = requier('express').router();
module.exports = router;

function filename(request, file, callback){
    callback(null, file.originalname);
};