const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const fileType = require('file-type');
const myParser = require('../public/javascript/js');

const mainUrl = "https://my-json-server.typicode.com/jorgejoseabad/fake-apis";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//primera ruta a api
router.get('/posts',function (req,res,next) {
  console.log("estoy en fetch posts");
  //ok si está funcionando
  fetch(`${mainUrl}` +'/posts')
  .then(res => res.json())
  .then(json => {
    myParser.myParser(json);
    //res.send(json);
    res.render('post',{
      title: 'Mis post enviados',
      json
    })
  })
  .catch(err=>console.log("Recojo error",err))
})

router.get('/comments',function (req,res,next) {
   console.log("estoy en fetch comments ");
   fetch(`${mainUrl}` +'/comments')
   .then(res => res.json())
   .then(json => {
     myParser.myParser(json);
     res.send(json)
   })
   .catch(err => console.log("Recojo error",err))
})

router.get('/products',function (req,res,next) {
   console.log("estoy en fetch comments ");
   fetch(`${mainUrl}` +'/products')
   .then(res => res.json())
   .then(json => {
     myParser.myParser(json);
     res.send(json)
   })
   .catch(err => console.log("Recojo error",err))
})

router.get('/profile',function (req,res,next) {
   console.log("estoy en fetch comments ");
   fetch(`${mainUrl}` +'/profile')
   .then(res => res.json())
   .then(json => {
     myParser.myParser(json);
     res.send(json)
   })
   .catch(err => console.log("Recojo error",err))
})

router.get('/db',function (req,res,next) {
   console.log("estoy en fetch comments ");
   fetch(`${mainUrl}` +'/db')
   .then(res => res.json())
   .then(json => {

     res.send(json)
   })
   .catch(err => console.log("Recojo error",err))
})

module.exports = router;
