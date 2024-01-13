import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'

function HomeScreen(){
    return (
        <div>
            <h1>Latest Stories</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} x1={3}>
                    <Products product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
