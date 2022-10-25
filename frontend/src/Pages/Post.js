import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import img from "./../assets/signup.jpg"

function Post() {
  return (
    <div className="post">
        <Container fluid>
            <Row>
                <Col md={6} className="d-none d-md-block">
                    <img src={img} alt="" className='h-100 img-fluid' />
                </Col>

                <Col xs={12} md={6}>
                    <form>
                        <div>
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label d-block">Info</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>

                        <div>
                            <label htmlFor="" className="form-label d-block">Category</label>
                            <select name="" className='form-select'>
                                <option value="">Politics</option>
                                <option value="">Football</option>
                                <option value="">Business</option>
                                <option value="">Health</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" className="form-control" />
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Post