import React from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, NavLink } from "reactstrap"
import Img from "./../assets/display.jpeg"

function Home() {


  return (
    <div className="home">
       <Container className='topsection'>
        <Row>
          <Col xs={12} md={4}>

          <NavLink href='/details'>
          <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>
          </NavLink>

          <NavLink href="/details">
          <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>
          </NavLink>
            
            <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>
          </Col>

          <Col xs={12} md={4}>
           <div className='banner'>
           <img src={Img} className="" alt="banner " />
           <h4>Attack: I didnt choose policemen family away</h4>
           </div>
          </Col>

          <Col xs={12} md={4}>
            <p className="bg-warning w-25 p-1">Top News</p>
            <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>

            <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>
            
            <div className='headline'>
              <i className="time">17min ago</i>
              <p className='title'>Fulani herdsmen were roaming around with dangerous weapon</p>
            </div>
          </Col>
        </Row>
        </Container> 

        <Container className='secondsection'>
          <p className="head text-danger fw-bold">Second section</p>
          <Row>

            <Col xs={12} md={3}>
              <Card>
                <CardImg
                src={Img}
                
                />
                <CardBody>
                  iya shalewa rice by 6pm
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card>
                <CardImg
                src={Img}
                
                />
                <CardBody>
                  iya shalewa rice by 6pm
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card>
                <CardImg
                src={Img}
                
                />
                <CardBody>
                  iya shalewa rice by 6pm
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card>
                <CardImg
                src={Img}
                
                />
                <CardBody>
                  iya shalewa rice by 6pm
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
    </div>
  )
}

export default Home