import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Badge, Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { getError } from '../utils'

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
          // dispatch({ type: 'FETCH_FAIL', payload: err.message });

          // 🍀c15, 👉 utils.js
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
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
  : <div>
     <h3>ProductScreen.js</h3>
  
     <Row>
      <Col md={6}>
        <img className='img-large'
        src={product.image}></img>
      </Col>
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item><h1>{product.name}</h1></ListGroup.Item>
          <ListGroup.Item><Rating rating={product.rating} numReviews={product.numReviews} /></ListGroup.Item>
          <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
          <ListGroup.Item>Desc : 
            <p>{product.description}</p>
          </ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
         </ListGroup>
      </Col>
      <Col md={3}>
        <Card.Body>
          <ListGroup variant='flush'> 
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0
                  ? <Badge bg="success">in stock</Badge>
                  : <Badge bg="danger">unavailable</Badge>}
                </Col>
              </Row>
            </ListGroup.Item>

            {/* 🍀c14. conditional  rendering
              조건이 맞으면 , 그다음의 element return, 
              안맞으면, 무시함
                    
              🍄inStock >0 일때, button 보여줌
            */}

            {
              product.countInStock >0 &&  
              <ListGroup.Item>
              <div className="d-grid">
                <Button variant="primary">add to cart</Button>
              </div>
              </ListGroup.Item>
            }
           
          </ListGroup>
        </Card.Body>
      
      </Col>
     </Row>
  
    </div>
}

export default ProductScreen