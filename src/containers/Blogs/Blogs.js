import React, { PureComponent } from 'react'
import { Jumbotron } from 'react-bootstrap'

import Blog from '../../components/Blog/Blog'
import blogData from '../../assets/database/blogData'
import './Blogs.css'

class Blogs extends PureComponent {
    renderBlogs = () => {
        let renderComp = []
        blogData.forEach(blog => {
            renderComp.push(<Blog key={blog.id} id={blog.id} title={blog.title} data={blog.data} image={blog.image} />)
        })
        return renderComp
    }

    render() {
        return (
            <Jumbotron className="blog-container" style={{ margin: "0px" }}>
                {this.renderBlogs()}
            </Jumbotron>
        )
    }
}

export default Blogs