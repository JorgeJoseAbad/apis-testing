var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const fileType = require('file-type');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//primera ruta a api
router.get('/myPost',function (req,res,next) {
  console.log("estoy en fetch my post")
  fetch('https://my-json-server.typicode.com/jorgejoseabad/fake-apis/post',{method:'GET'})
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err=>console.log("Recojo error",err))
})

module.exports = router;
