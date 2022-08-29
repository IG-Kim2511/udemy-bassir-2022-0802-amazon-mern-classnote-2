import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

function HomeScreen() {
  const [products_api, setProducts_api] = useState([]);

      // 🍀c10. ~~~/api/products주소에 JSON만든것을 axios로 불러옴
    // 👉package.json  : proxy 와 연결

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts_api(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>HomeScreen.js</h3>

      <h1>Featured Products</h1>

      <div className="products">

        {/* 🍀c7. ~.map(~) */}

        {            
            // 🍀c7. data.js의 자료
            // data.data_products.map((p_product)=>(

           // 🍀c10. server.js의 api data 가져옴
            products_api.map((product) => (

            // 🍀c7.  key={} : map()안의 첫번째 태그에 추가
          <div className="product" key={product.slug}>

            {/*  🍀c7.  href={ `~~~`}
                slug사용해서 address 세팅 */}
                        
            {/* 🍀c8  Link to="~~" */}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
