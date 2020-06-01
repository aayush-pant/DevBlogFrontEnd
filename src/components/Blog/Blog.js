import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import './Blog.css'

const blog = props => {
    return (
        <Row className="row_blog justify-content-center">
            <Col lg="6">
                <Card className="card_blog">
                    <Card.Body className="card_blog-body">
                        <div className="card_blog-text-data">
                            <Card.Title className="card_blog-title">{props.title}</Card.Title>
                            <Card.Text className="card_blog-text">{props.text}</Card.Text>
                        </div>
                        <Card.Img className="card_blog-img" src={props.image} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default blog