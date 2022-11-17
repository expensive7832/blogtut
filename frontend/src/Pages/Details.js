import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap'
import img from "./../assets/display.jpeg"
import { Link, useParams } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FiTwitter } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io"
import { useQuill } from 'react-quilljs';
import axios from 'axios'
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share';

function Details() {

  const { quill, quillRef } = useQuill();
  const { id } = useParams()

  const [details, setDetails] = useState({})
  const [others, setOthers] = useState([])
  const [latest, setLatest] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`)
      .then((res) => setDetails(res?.data?.details))
      .catch((e) => console.log(e))
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/latest/${id}`)
      .then((res) => setLatest(res?.data?.details))
      .catch((e) => console.log(e))
  })

  useEffect(() =>{
    axios.post("http://localhost:5000/others", {id: details?.catId}  )
    .then((res) => setOthers(res?.data?.articles))
  }, [details])




 

  return (
    <div className="details">
      <Container>
        <Row className='justify-content-between'>
          <Col xs={12} md={8} className="">
            <h2>{details?.title}</h2>
            <p className='lead'>{new Date(details?.dateCreated).toDateString()}</p>

            <img className='w-100' src={details?.img} alt={details?.title} />

            <div>
              <p>By {details?.name}</p>

              <div className='d-flex'>
                <p className="lead">Kindly Share</p>
                <div className="icon">
                  <FacebookShareButton
                     url={`${process.env.REACT_APP_MYSITE_URL}/details/${id}`}
                     quote={'Hot gist on my mern blog app'}
                     hashtag={'#current news'}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <TelegramShareButton
                     url={`${process.env.REACT_APP_MYSITE_URL}/details/${id}`}
                     quote={'Hot gist on my mern blog app'}
                     hashtag={'#current news'}
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>

                  <TwitterShareButton
                     url={`${process.env.REACT_APP_MYSITE_URL}/details/${id}`}
                     quote={'Hot gist on my mern blog app'}
                     hashtag={'#current news'}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={`${process.env.REACT_APP_MYSITE_URL}/details/${id}`}
                    quote={'Hot gist on my mern blog app'}
                    hashtag={'#current news'}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  <LinkedinShareButton
                    url={`${process.env.REACT_APP_MYSITE_URL}/details/${id}`}
                    quote={'Hot gist on my mern blog app'}
                    hashtag={'#current news'}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </div>

              <hr />

              <div dangerouslySetInnerHTML={{__html: details?.body}}/>

              <hr />

              <div className="related">

                <h3>You Might Also Like</h3>

                <Row>
                 
                 {others?.map((other) =>(
                   <Col key={other?.id} xs={12} md={4}>
                   <Link to={`/details/${other?.id}`}>
                  
                   <Card>
                     <CardImg
                       src={other?.img ? other?.img : "no image"}
                     />
                     <CardBody className='fw-bold'>
                      {other?.title}
                     </CardBody>
                   </Card>
                 
                   </Link>
                   </Col>
                 ))}
                  
                </Row>
              </div>

            </div>
          </Col>

          <Col md={2} className="d-none d-md-block">
          </Col>

          <Col xs={12} md={2} className="latest" >
            <p className='text-danger fw-bold'>Latest News</p>
           {latest?.map((lt) =>(
             <Link  key={lt?.id} to={`/details/${lt?.id}`}>
             <Card className='my-2'>
             <CardImg
               src={lt?.img}
             />
             <CardBody>
              {lt?.title}
             </CardBody>
           </Card>
             </Link>
           ))}
           
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Details