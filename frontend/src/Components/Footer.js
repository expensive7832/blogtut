import React from 'react'
import { Col, Container, NavLink, Row } from 'reactstrap'
import logo from "./../assets/punch.png"
import {FaFacebook} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import {FiTwitter} from "react-icons/fi"
import {IoLogoWhatsapp} from "react-icons/io"

function Footer() {
  return (
    <div className="footer bg-dark pb-5 pt-1">
        <Container>
                 <img src={logo} alt="image" />
            <Row>
                <Col xs={4} md={2} className="text-white text-center">
                    <NavLink>Home</NavLink> <br />
                    <NavLink>About</NavLink> <br />
                    <NavLink>Contact</NavLink> <br />
                   
                </Col>

                <Col xs={4} md={2} className="text-white text-center">
                    <NavLink>Home</NavLink> <br />
                    <NavLink>About</NavLink> <br />
                    <NavLink>Contact</NavLink> <br />
                   
                </Col>

                <Col xs={4} md={2} className="text-white text-center">
                    <NavLink>Home</NavLink> <br />
                    <NavLink>About</NavLink> <br />
                    <NavLink>Contact</NavLink> <br />
                   
                </Col>
                
                <Col xs={12} md={6} className="text-white text-center">
                    <FaFacebook size={32}/>
                    <RiInstagramFill size={32}/>
                    <FiTwitter size={32}/>
                    <IoLogoWhatsapp size={32}/>
                </Col>


            </Row>
        </Container>
    </div>
  )
}

export default Footer