import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import data from '../data'

const HomeScreen = () => {
    // 🍀c10.
    const [api_products, setApi_products] = useState([]);
    
    // 🍀c10. ~~~/api/products주소에 JSON만든것을 axios로 불러옴
    // 👉package.json  : proxy 와 연결
    useEffect(() => {
      
        const fetchData  = async ()=>{
            const result = await axios.get('/api/products');

            setApi_products(result.data_products);
        }
        fetchData();
    }, [])
    
  return (
    <div>
        <h3>HomeScreen.js</h3>

        <h1> Featured Products</h1>

        <div className="products">
        
            {/* 🍀c7. ~.map(~) */}
            {
                // data.data_products.map((p_product)=>(

                // c10. server.js의 api data 가져옴
                api_products.data_products.map((p_product)=>(

                // 🍀c7.  key={} : map()안의 첫번째 태그에 추가
                <div className="product" key={p_product.slug}>

                    {/*  🍀c7.  href={ `~~~`}
                        slug사용해서 address 세팅 */}
                        
                    {/* 🍀c8  Link to="~~" */}
                <Link to={`/product/${p_product.slug}`}>.
                    <img src={p_product.image} alt={p_product.name}/>
                </Link>

                <div className="product-info">
                    <Link to={`/product/${p_product.slug}`}>
                    <p>{p_product.name}</p>
                    </Link>
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