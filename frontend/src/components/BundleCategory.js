import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';

const BundleCategory = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <CardGroup>
      {loading ? (
        <Loader />
      ) : products ? (
        products.map((product) => (
          <Card key={product._id}>
            <Link to={`/products/${product._id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="h4" className="bundle-category">
                  {product.category}
                </Card.Title>
              </Link>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Message variant="danger">{error}</Message>
      )}
    </CardGroup>
  );
};

export default BundleCategory;
