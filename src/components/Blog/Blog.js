import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import Aux from '../../hoc/Aux/Aux'
import './Blog.css'

const blogTextDesktop = (blogText) => {
    let blogDesc = [];
    let blogDescText = blogText.split("|");
    let i = 0
    blogDescText.forEach(text => {
        if (i < blogDescText.length - 1) {
            blogDesc.push(<Aux key={i}>{text}<br /></Aux>)
        }
        else {
            blogDesc.push(<Aux key={i}>{text + "..."}<br /></Aux>)
        }
        i += 1
    });
    return blogDesc
}

const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

const blog = props => {
    return (
        <Row className="row_blog justify-content-center">
            <Col className="outer_col" lg="6">
                <NavLink className="link" to={"/blog/" + props.id}>
                    <Card className="card_blog">
                        <Card.Body className="card_blog-body">
                            <div className="card_blog-text-data">
                                <Card.Title className="card_blog-title">{titleCase(props.title)}</Card.Title>
                                <Card.Text className="card_blog-text">{blogTextDesktop(props.data)}</Card.Text>
                            </div>
                            <Card.Img className="card_blog-img" src={props.image} />
                        </Card.Body>
                    </Card>
                </NavLink>
            </Col>
        </Row>
    )
}

export default blog