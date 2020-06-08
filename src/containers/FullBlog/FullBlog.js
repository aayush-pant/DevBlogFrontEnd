import React, { Component } from 'react'
import { Jumbotron, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router'

import blogData from '../../assets/database/blogData'
import Aux from '../../hoc/Aux/Aux'
import './FullBlog.css'

const blogText = (blogTextData) => {
    let renderBlogText = []
    let blogTextParaArray = blogTextData.split("|")
    let i = 0;
    blogTextParaArray.forEach(data => {
        renderBlogText.push(<p key={i}>{data}</p>)
        i += 1;
    });
    return renderBlogText
}

const BlogData = () => {
    let { id } = useParams()
    let blog = blogData[id - 1]
    return (
        <Aux>
            <Row className="justify-content-center">
                <Col className="col_fullblog" lg="6">
                    <img className="fullblog_main_img" src={blog.image} alt={blog.title} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col_fullblog pt-3" lg="6">
                    <Card.Title className="fullblog_title">{blog.title}</Card.Title>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col_fullblog pb-4" lg="6">
                    <div className="fullblog_text">{blogText(blog.data)}</div>
                </Col>
            </Row>
        </Aux>
    )
}

class FullBlog extends Component {
    render() {
        return (
            <Jumbotron className="fullblog-container" style={{ margin: "0px" }}>
                <BlogData />
            </Jumbotron>
        )
    }
}

export default FullBlog