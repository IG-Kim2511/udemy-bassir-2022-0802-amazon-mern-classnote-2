import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {

    // 🍀c8. useParams
    const { slug } = useParams();

  return (
    <div>
        <h3>ProductScreen.js</h3>

        {/* 🍀c8. useParams */}
        <h1>{slug}</h1>
    </div>
  )
}

export default ProductScreen