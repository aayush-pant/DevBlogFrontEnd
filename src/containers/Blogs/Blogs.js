import React, { PureComponent } from 'react'
import { Jumbotron } from 'react-bootstrap'

import Blog from '../../components/Blog/Blog'
import './Blogs.css'

class Blogs extends PureComponent {
    constructor() {
        super()
        this.state = {
            blogs: null
        }
    }

    componentDidMount() {
        fetch('/assets/database/blogData.json')
            .then(res => res.json())
            .then(data => data.blogData)
            .then(blogData => {
                let renderComp = []
                blogData.forEach(blog => {
                    console.log(blog)
                    renderComp.push(<Blog key={blog.id} id={blog.id} title={blog.title} data={blog.data} image={blog.image} />)
                })
                this.setState({
                    blogs: renderComp,
                })
            })
    }

    render() {
        let blogData = this.state.blogs
        return (
            <Jumbotron className="blog-container" style={{ margin: "0px" }}>
                {blogData}
            </Jumbotron>
        )
    }
}

export default Blogs