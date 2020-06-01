import React, { Component } from 'react'
import { Jumbotron, Row, Col, Card } from 'react-bootstrap'

import './About.css'

class AddBlog extends Component {
    render() {
        return (
            <Jumbotron className="add-blog-container" style={{ margin: "0px" }}>
                <Row className="row_blog justify-content-center">
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <div className="about_main mb-3">
                                    <div className="about_subheading mb-2">About</div>
                                    Travelling with the old camera and healthy living doesn’t have to be overwhelming. We believe in empowering you with the tools you need to make long-lasting memories, healthy food choices that can help you to feel the best. Let our lenses make the travel turn into an elegant music, let our food menu energizes you to rush to the kitchen, let our pen write a story that can take you down to a memory lane, let us travel together and let’s eat together. We are committed to provide you the resources you need to build a healthy and a beautiful lifestyle.
                                </div><hr />
                                <div className="mb-3">
                                    <div className="about_subheading mb-2">Our story</div>
                                    <div>
                                        So much of my heart behind LensAndWords stems from my personal struggle that I faced for so many years. From the age of fourteen into my early adult-hood I became trapped in a vicious cycle of dieting, disordered eating, anxiety and being stucked at a place where I don’t go travel. It wasn’t until I am in my mid-twenties that I reached a healthy place in my body and mind. So, I decided to pen down memories and click good live photos along with writing down some advice for the nutritious life of others.
                                    </div>
                                </div><hr />
                                <div>
                                    <div className="about_subheading mb-2">Meet the person behind</div>
                                    <Row>
                                        <Col>
                                            <div className="about_img mb-1"><img src={process.env.PUBLIC_URL + '/assets/images/devesh.png'} alt="founder" /></div>
                                            <div className="about_name mb-1">Devesh Kumar</div>
                                            <div className="about_text">
                                                He is one of the founder of Lens&Words. He has the keen interest in writing blogs. Currently, he is studying at IIT Kharagpur in the department of Food Process Engineering.
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="about_img mb-1"><img src={process.env.PUBLIC_URL + '/assets/images/urbi.jpg'} alt="founder" /></div>
                                            <div className="about_name mb-1">Urbi Pathak</div>
                                            <div className="about_text">
                                                Workaholic and passionate about her work, Urbi has the habit of watching the things in much different ways. She is currently pursuing her masters from Lili, France in the department of Food Engineering.
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </Jumbotron >
        )
    }
}

export default AddBlog