import React from 'react'
import data from '../data'

const HomeScreen = () => {
  return (
    <div>
        <h3>HomeScreen.js</h3>

        <h1> Featured Products</h1>

        <div className="products">
        
            {/* 🍀c7. ~.map(~) */}
            {
            data.data_products.map((p_product)=>(

                // 🍀c7.  key={} : map()안의 첫번째 태그에 추가
                <div className="product" key={p_product.slug}>

                    {/*  🍀c7.  href={ `~~~`}
                        slug사용해서 address 세팅 */}
                <a href={`/product/${p_product.slug}`}>.
                    <img src={p_product.image} alt={p_product.name}/>
                </a>

                <div className="product-info">
                    <a href={`/product/${p_product.slug}`}>
                    <p>{p_product.name}</p>
                    </a>
                    <p><strong>${p_product.price}</strong></p>    
                </div>        
                </div>
            ))
            }
        </div>            
    </div>
  )
}

export default HomeScreen