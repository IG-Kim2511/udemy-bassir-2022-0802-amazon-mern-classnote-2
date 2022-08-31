import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

// 🍀c11.use-reducer-logger
import logger from 'use-reducer-logger';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';


/* 
    🍀c11. useReducer

      loading중  👉 ture
      loading 끝 👉 false
      fetch실패 : error 보여줌
*/

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}

    case 'FETCH_SUCCESS':
      return {...state, loading: false, products:action.payload}

    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
}


// function HomeScreen() {

//   // const [products_api, setProducts_api] = useState([]);

//   /* 🍀c11 . useReducer
//       default값: 
//       loading : true, 
//       error : ""

//      🍀c11.use-reducer-logger
//   */
//   const [{loading, error, products}, dispatch] = useReducer(logger(reducer),{
//     loading:true,
//     error:"",
//     products:[],
//   })

//     /* 
//         🍀c10. ~~~/api/products주소에 JSON만든것을 axios로 불러옴
//         👉package.json  : proxy 와 연결 
//         backend/ server.js도 실행중이어야 함
//         backend에서, frontend에서 모두 npm start    
//     */

//   useEffect(() => {
//     const fetchData = async () => {

//       // 🍀c11
//       dispatch({type:'FETCH_REQUEST'});
      
//       try {
//         const result = await axios.get('/api/products');

//         // setProducts_api(result.data);
//         dispatch({type:'FETCH_SUCCESS',payload:result.data});
        
        
//       } catch (err) {
//         dispatch({type:'FETCH_FAIL',payload:err.message});
        
//       }
//     };
//     fetchData();
//   }, []);

  
//   return (
//     <div>
//       <h3>HomeScreen.js</h3>

//       <h1>Featured Products</h1>
  
//         <div className="products">
//         {loading ? 
//           <div>Loading...</div>
//          : error ? 
//           <div>{error}</div>
//          : 

//           // 🍀c7. ~.map(~) 
//           // 🍀c7. data.js의 자료
//           // data.data_products.map((p_product)=>(

//           // 🍀c10. server.js의 api data 가져옴
//           products.map((product) => (

//                // 🍀c7.  key={} : map()안의 첫번째 태그에 추가
//             <div className="product" key={product.slug}>

//                 {/*  🍀c7.  href={ `~~~`}
//                     slug사용해서 address 세팅 */}
                            
//                 {/* 🍀c8  Link to="~~" */}
//               <Link to={`/product/${product.slug}`}>
//                 <img src={product.image} alt={product.name} />
//               </Link>
//               <div className="product-info">
//                 <Link to={`/product/${product.slug}`}>
//                   <p>{product.name}</p>
//                 </Link>
//                 <p>
//                   <strong>${product.price}</strong>
//                 </p>
//                 <button>Add to cart</button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }


/* 

  🍀c13. bootstrap
*/

function HomeScreen() {

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>HomeScreen.js</h3>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <MessageBox>{error}</MessageBox>

        ) : (
          // Row, Col, Product
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
