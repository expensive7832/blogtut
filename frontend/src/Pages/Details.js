import React from 'react'
import { Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap'
import img from "./../assets/display.jpeg"

import { FaFacebook } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FiTwitter } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io"

function Details() {
  return (
    <div className="details">
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col xs={12} md={8} className="">
            <h2>Obi Supprter Cause violence over comment</h2>
            <p className='lead'>25th october, 20222</p>

            <img className='w-100' src={img} alt="" />

            <div>
              <p>By Angency Report</p>

              <div className='d-flex'>
                <p className="lead">Kindly Share</p>
                <div className="icon">
                  <FaFacebook size={26} />
                  <RiInstagramFill size={26} />
                  <FiTwitter size={26} />
                  <IoLogoWhatsapp size={26} />
                </div>
              </div>

              <div className="info">
                An Iranian man, Amou Haji, nicknamed the “dirtiest man in the world” for not taking a shower for decades has died at the age of 94, state media reported on Tuesday.

                Haji, who did not wash for more than half a century and was single, died on Sunday in the village of Dejgah in the southern province of Fars, IRNA news agency reported.

                Haji had avoided showering over fears of “getting sick”, the agency quoted a local official as saying.
              </div>

              <hr />

              <div className="related">

              <h3>You Might Also Like</h3>

                <Row>
                  <Col xs={12} md={4}>
                    <Card>
                      <CardImg
                      src={img}
                      />
                      <CardBody className='fw-bold'>
                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. Quisquam, excepturi.
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card>
                      <CardImg
                      src={img}
                      />
                      <CardBody className='fw-bold'>
                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. Quisquam, excepturi.
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card>
                      <CardImg
                      src={img}
                      />
                      <CardBody className='fw-bold'>
                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. Quisquam, excepturi.
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>

            </div>
          </Col>

          <Col md={2} className="d-none d-md-block">
          </Col>

          <Col xs={12} md={2} className="latest" >
            <p className='text-danger fw-bold'>Latest News</p>
            <Card className='my-2'>
              <CardImg
              src={img}
              />
              <CardBody>
                Lorem ipsum dolor sit, 
                amet consectetur 
              </CardBody>
            </Card>
            <Card className='my-2'>
              <CardImg
              src={img}
              />
              <CardBody>
                Lorem ipsum dolor sit, 
                amet consectetur 
              </CardBody>
            </Card>
            <Card className='my-2'>
              <CardImg
              src={img}
              />
              <CardBody>
                Lorem ipsum dolor sit, 
                amet consectetur 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Details