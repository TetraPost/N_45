var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = 'public/upload';

async function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const response = await readDir(path);    
    let retList = '';
    if (response.length > 0) {
      retList = response;
    } else {
      retList = ['error'];
    }
    console.log(response.length);
    res.render('catalog', { users: retList });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
