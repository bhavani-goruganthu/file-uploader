const express = require('express')
const multer = require('multer')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage })

const app = express()

app.post('/upload', upload.single('file'), (req, res, next) => {
  res.send('Done!');
});

app.listen(4000);