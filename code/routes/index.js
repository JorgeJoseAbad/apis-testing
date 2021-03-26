const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const fileType = require('file-type');
const myParser = require('../public/javascript/js');

const mainUrl = "https://my-json-server.typicode.com/jorgejoseabad/fake-apis";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main search page' });
});

router.get('/posts',function (req,res,next) {
  fetch(`${mainUrl}` +'/posts')
  .then(res => res.json())
  .then(data => {
    myParser.myParser(data);
    //res.send(json);
    res.render('post',{
      title: 'My post',
      data: data
    })
  })
  .catch(err=>console.log("Error: ",err))
})

router.get('/comments',function (req,res,next) {
   fetch(`${mainUrl}` +'/comments')
   .then(res => res.json())
   .then(data => {
     myParser.myParser(data);
     //res.send(json)
     res.render('comments',{
       title: 'My comments send',
       data: data
     })
   })
   .catch(err => console.log("Error: ",err))
})

router.get('/products',function (req,res,next) {
   fetch(`${mainUrl}` +'/products')
   .then(res => res.json())
   .then(data => {
     myParser.myParser(data);
     //res.send(json)
     res.render('products',{
       title: 'My products',
       data: data
     })
   })
   .catch(err => console.log("Error: ",err))
})

router.get('/profile',function (req,res,next) {
   fetch(`${mainUrl}` +'/profile')
   .then(res => res.json())
   .then(data => {
     myParser.myParser(data);
     //res.send(json)
     res.render('index',{
       title: data.name
     })
   })
   .catch(err => console.log("Error: ",err))
})

router.get('/db',function (req,res,next) {
   fetch(`${mainUrl}` +'/db')
   .then(res => res.json())
   .then(data => {

     res.send(data)
   })
   .catch(err => console.log("Error: ",err))
})

module.exports = router;
