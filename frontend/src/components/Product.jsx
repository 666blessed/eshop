import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '290px' }}>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' style={{ color: '#3d3d3d' }}>
          <strong>${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
