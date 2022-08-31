// const express = require('express')
import express from 'express';

import data from './data.js';

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('backend server connected')
})


// 🍀c9. data.js : backend폴더의 data.js
// http://localhost:5000/api/products 으로 접속
app.get('/api/products', (req, res) => {
  res.send(data.data_products)
})

/* 
  🍄🍀c14
  ~~/:slug에 접속하면,

  data.products의 slug 키 === :slug 비교 후 맞는것을 , const product

  if (product)

  res.send(product);
*/

app.get('/api/products/slug/:slug', (req, res) => {

  const product = data.products.find((x)=> x.slug === req.params.slug);

  if (product) {
    res.send(product);    
  } else {
    res.status(404).send({message : 'Product Not Found'});    
  }  
})


//🍀c9 default port : 5000 
// 나중에  process.env.PORT 설정할듯..
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})