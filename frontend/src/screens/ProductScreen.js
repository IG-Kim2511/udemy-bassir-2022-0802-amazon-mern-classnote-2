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
        <h3>ProductScreen.js</h3>

        {/* 🍀c8. useParams */}
        <h1>{slug}</h1>
    </div>
  )
}

export default ProductScreen