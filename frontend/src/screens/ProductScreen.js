import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

// 🍀c14
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}

    case 'FETCH_SUCCESS':
      return {...state, loading: false, product:action.payload}

    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
}

const ProductScreen = () => {

    // 🍀c8. useParams
    const { slug } = useParams();

    // 🍀c14
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });
    

    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
          
          // axios.get('/api/products/slug/${slug}');
          const result = await axios.get(`/api/products/slug/${slug}`);
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err.message });
        }
  
        // setProducts(result.data);
      };
      fetchData();
    }, [slug]);
  

  // return (
  //   <div>
  //       <h3>ProductScreen.js</h3>

  //       {/* 🍀c8. useParams */}
  //       <h1>{slug}</h1>  
  //   </div>
  // )


  /*  🍀c14
    <기본 template>
    return 
    (
    <div>

    순으로 코딩함

    <🍀return에 condition rendering 넣기>
      return
      변수 
      ? <div>
      : 변수 
      ? <div>
*/

  return loading
  ? <div>loading..</div>
  : error
  ? <div>{error}</div>
  : <div>{product.name}</div>
}

export default ProductScreen