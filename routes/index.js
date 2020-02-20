const express = require('express');
const router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload')
  },
  filename: function (req, file, cb) {
    const ext = file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, ext);
  }
})

const upload = multer({ storage: storage }).single('filename');

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('index', { title: 'Try form Post'});
});

router.post('/uploads', upload, function (req, res, next) {
  const file = req.file;
  if(!file){
    return res.json({ valid: false, status: 'Выберите файл' });
  }
    return res.json({ valid: true, status: 'Загружен' });
})


module.exports = router;
