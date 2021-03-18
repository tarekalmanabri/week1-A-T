import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopBundles } from '../actions/bundleActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const bundleTopRated = useSelector((state) => state.bundleTopRated);
  const { loading, error, bundles } = bundleTopRated;

  useEffect(() => {
    dispatch(listTopBundles());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-light mb-5">
      {bundles.map((bundle) => (
        <Carousel.Item key={bundle._id}>
          <Link to={`/bundles/${bundle._id}`}>
            <Image
              className="w-100 h-100"
              src={bundle.image}
              alt={bundle.name}
              fluid
            />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {bundle.name} (${bundle.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
