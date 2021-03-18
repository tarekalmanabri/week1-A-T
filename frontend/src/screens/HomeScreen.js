import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Bundly from '../components/Bundly';
import BundleCategory from '../components/BundleCategory';
import Meta from '../components/Meta';
import { listBundles } from '../actions/bundleActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const bundleList = useSelector((state) => state.bundleList);
  const { loading, error, bundles, page, pages } = bundleList;

  useEffect(() => {
    dispatch(listBundles(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <Bundly />
        </>
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1 className="homepage-headings my-5">Bundle Categories</h1>
      <BundleCategory />
      <h1 className="homepage-headings my-5">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {bundles.map((bundle) => (
              <Col key={bundle._id} sm={12} md={6} lg={4} xl={3}>
                <Product bundle={bundle} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
