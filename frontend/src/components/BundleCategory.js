import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';

const BundleCategory = () => {
  return (
    <CardGroup>
      <Card className="card-bundle-category">
        <Link to="/">
          <Card.Img variant="top" src="images/vegan.jpg" />
        </Link>
        <Card.Body>
          <Link to="/">
            <Card.Title as="h4" className="bundle-category">
              Vegan
            </Card.Title>
          </Link>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Link to="/">
          <Card.Img variant="top" src="images/roasted-veggies.jpg" />
        </Link>
        <Card.Body>
          <Link to="/">
            <Card.Title as="h4" className="bundle-category">
              Vegetarian
            </Card.Title>
          </Link>
          <Card.Text>
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
            odit.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Link to="/">
          <Card.Img variant="top" src="images/veggie-plate.jpg" />
        </Link>
        <Card.Body>
          <Link to="/">
            <Card.Title as="h4" className="bundle-category">
              Meat & Veggies
            </Card.Title>
          </Link>
          <Card.Text>
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint eveniet aliquid culpa officia aut?
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default BundleCategory;
