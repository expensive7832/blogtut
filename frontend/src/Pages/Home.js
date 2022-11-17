import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, NavLink } from "reactstrap"
import Img from "./../assets/display.jpeg"
import Moment from 'react-moment';
function Home() {

  const [article, setArticle] = useState([])
  const [football, setFootball] = useState([])
  const [centerImg, setCenterImg] = useState("")

  useEffect(() =>{
    axios.get("http://localhost:5000/centerArticle")
    .then((res) => setCenterImg(res?.data?.article))
  },[])
  


  useEffect(() =>{
    axios.get("http://localhost:5000/getArticle")
    .then((res) => setArticle(res?.data?.article))
  }, [])

  useEffect(() =>{
    axios.get("http://localhost:5000/getArticleFootball")
    .then((res) => setFootball(res?.data?.article))
  }, [])


  return (
    <div className="home">
       <Container className='topsection'>
        <Row>
          <Col xs={12} md={4}>

          {article?.map((art) =>(
             <NavLink key={art?.id} href={`/details/${art?.id}`}>
             <div className='headline'>
                 <i className="time"><Moment fromNow ago>{art?.dateCreated}</Moment></i>
                 <p className='title'>{art?.title}</p>
               </div>
             </NavLink>
          ))}

        
            
            
          </Col>

          <Col xs={12} md={4}>
           <div className='banner'>
           <img src={centerImg?.img} className="" alt="banner " />
           <h4>{centerImg?.title}</h4>
           </div>
          </Col>

          <Col xs={12} md={4}>
            <p className="bg-warning w-25 p-1">Football News</p>
            

            {football?.map((fb) =>(
              <NavLink key={fb?.id} href={`/details/${fb?.id}`}>
              <div className='headline'>
                  <i className="time"><Moment fromNow ago>{fb?.dateCreated}</Moment></i>
                  <p className='title'>{fb?.title}</p>
                </div>
              </NavLink>
            ))}
            
            
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