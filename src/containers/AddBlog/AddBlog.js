import React, { Component } from 'react'
import { Jumbotron, Row, Col, Card } from 'react-bootstrap'
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './AddBlog.css'

class AddBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadedImages: []
        }
    }

    uploadImageCallBack = (file) => {
        let uploadedImages = this.state.uploadedImages;
        const imageObject = {
            file: file,
            localSrc: URL.createObjectURL(file),
        }
        console.log(uploadedImages)
        console.log(imageObject)
        uploadedImages.push(imageObject);
        this.setState({ uploadedImages: uploadedImages })
        return new Promise(
            (resolve, reject) => {
                resolve({ data: { link: imageObject.localSrc } });
            }
        );
    }

    render() {
        return (
            <Jumbotron className="add-blog-container" style={{ margin: "0px" }}>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center" lg="8">
                        <h2>Fill up the data for your Blog</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col lg="8">
                        <div>
                            Blog Title:
                        </div>
                        <div>
                            Insert a Thumbnail image:
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="8">
                        <Card style={{ height: "590px" }}>
                            <Editor
                                wrapperClassName="wrapper"
                                toolbarClassName="toolBar"
                                editorClassName="editor"
                                toolbar={{
                                    image: {
                                        uploadCallback: this.uploadImageCallBack,
                                        previewImage: true,
                                        alt: { present: true, mandatory: false },
                                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg'
                                    }
                                }} />
                        </Card>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}

export default AddBlog