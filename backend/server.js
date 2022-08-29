// const express = require('express')
import express from 'express';

import data from './data';

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


// 🍀c9 backend폴더의 data.js
app.get('/api/products', (req, res) => {
  res.send(data.data_products)
})


// default port : 5000
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('http://localhost:${port}')
})