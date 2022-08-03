import express from 'express';

import data from './data';

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/products', (req, res) => {
  res.send(data.data_products)
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(hello)
})