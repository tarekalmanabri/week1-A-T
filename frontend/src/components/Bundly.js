import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Bundly = () => {
  return (
    <>
      <Jumbotron className="my-5">
        <h1 className="display-3">Save time, money and local farmers!</h1>
        <p className="lead">
          Officiis iure rerum voluptates a cumque velit quibusdam sed amet
          tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
          temporibus enim commodi iusto libero magni deleniti quod quam
          consequuntur! Commodi minima excepturi repudiandae velit hic maxime
          doloremque. Nulla, placeat. Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.
          Possimus quis earum veniam quasi aliquam eligendi, placeat qui
          corporis!
        </p>
        <Link to="/register?redirect=/">
          <Button className="homepage-button" variant="primary" size="lg" block>
            ORDER NOW
          </Button>
        </Link>
      </Jumbotron>
    </>
  )
}

export default Bundly
