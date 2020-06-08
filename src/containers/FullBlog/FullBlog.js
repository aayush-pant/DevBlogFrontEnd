import React, { Component } from 'react'
import { Jumbotron, Row, Col, Card } from 'react-bootstrap'
import Aux from '../../hoc/Aux/Aux'
import './FullBlog.css'

class FullBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: null
        }
    }

    blogText = (blogTextData) => {
        let renderBlogText = []
        let blogTextParaArray = blogTextData.split("|")
        let i = 0;
        blogTextParaArray.forEach(data => {
            renderBlogText.push(<p key={i}>{data}</p>)
            i += 1;
        });
        return renderBlogText
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetch('/assets/database/blogData.json')
            .then(res => res.json())
            .then(data => data.blogData)
            .then(blogData => {
                let blog = blogData[id - 1]
                let renderComp = (
                    <Aux key={id}>
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
                                <div className="fullblog_text">{this.blogText(blog.data)}</div>
                            </Col>
                        </Row>
                    </Aux>
                )
                return renderComp
            })
            .then(renderComp => {
                this.setState({
                    blog: renderComp
                })
            })
    }

    render() {
        let blog = this.state.blog
        console.log(blog)
        return (
            <Jumbotron className="fullblog-container" style={{ margin: "0px" }}>
                {blog}
            </Jumbotron>
        )
    }
}

export default FullBlog