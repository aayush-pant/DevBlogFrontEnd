import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import './Thoughts.css'

class AddBlog extends Component {
    render() {
        return (
            <Jumbotron className="add-blog-container" style={{ margin: "0px" }}>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center" lg="8">
                        <h2>Coming Soon...</h2>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}

export default AddBlog