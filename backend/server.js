// const express = require('express')
import express from 'express';

import data from './data.js';

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('backend server connected')
})


// ๐c9. data.js : backendํด๋์ data.js
// http://localhost:5000/api/products ์ผ๋ก ์ ์
app.get('/api/products', (req, res) => {
  res.send(data.data_products)
})

/* 
  ๐๐c14
  ~~/:slug์ ์ ์ํ๋ฉด,

  data.products์ slug ํค === :slug ๋น๊ต ํ ๋ง๋๊ฒ์ , const product

  if (product)

  res.send(product);
*/

app.get('/api/products/slug/:slug', (req, res) => {

  const product = data.data_products.find((x)=> x.slug === req.params.slug);

  if (product) {
    res.send(product);    
  } else {
    res.status(404).send({message : 'Product Not Found'});    
  }  
})


//๐c9 default port : 5000 
// ๋์ค์  process.env.PORT ์ค์ ํ ๋ฏ..
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})