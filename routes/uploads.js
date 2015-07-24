var express = require('express'); 
var router = express.Router(); 
var util = require("util"); 
var fs = require("fs"); 
var multer = require('multer');
var upload = multer({ dest: './public/images/uploads',
			limits: {fileSize: 1000000, files:2}, });
 
router.get('/', function(req, res) { 
  res.render('uploadPage'); 
}); 

router.post('/upload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log('post request successfully received');
  console.log(req.file);
  console.log();  

  // Status handling
 res.status(200).send('File uploaded!');
 // res.status(404).send('Sorry, we cannot find that!');
 //   // res.status(500).send({ error: 'something blew up' });
 //     // res.send("File uploaded.")
})

module.exports = router;
