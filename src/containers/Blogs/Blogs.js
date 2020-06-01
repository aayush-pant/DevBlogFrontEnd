import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

import Blog from '../../components/Blog/Blog'

import './Blogs.css'

class Blogs extends Component {
    render() {
        let title = "Card Title"
        let text = "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
        let image = "/assets/images/travel.jpeg"
        return (
            <Jumbotron className="blog-container" style={{ margin: "0px" }}>
                <Blog title={title} text={text} image={image} />
            </Jumbotron>
        )
    }
}

export default Blogs