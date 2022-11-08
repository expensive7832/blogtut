import React, { useState } from 'react'
import logo from "./../assets/punch.png"
import { HiSearchCircle } from "react-icons/hi"
import { BsFillCollectionPlayFill } from "react-icons/bs"
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap"
import { NavLink } from "reactstrap"
import { IoMdContact } from "react-icons/io"
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../Redux/Slices/UserSlices'

function Header() {

  const login = useSelector((state) => (state?.user?.login))
  const dispatch = useDispatch()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="header">
      <Container fluid>
        <Row className='row'>
          <Col xs={3} className="">
            <img src={logo} alt="website logo" />
          </Col>

          <Col xs={9} className="d-flex justify-content-end">
            <div className='searchbox d-flex justify-content-between p-2 w-50'>
              <input type="text" placeholder='search' className='search w-75' />
              <HiSearchCircle size={32} />
            </div>

            <div className='d-md-block d-none videoIcon d-flex py-2 px-3  align-items-center img-circle bg-dark'>
              <BsFillCollectionPlayFill color='white' size={28} />
              <small className='text-white'>Videos</small>
            </div>
          </Col>


        </Row>
      </Container>

      <div className="bg-dark text-white d-flex justify-content-between p-2 mt-4 mb-2">
        <NavLink className='fw-bold' to={"/home"}>Home</NavLink>
        <NavLink className='fw-bold' to={"/about"}>About</NavLink>
        <NavLink className='fw-bold' to={"/contact"}>Contact</NavLink>
        <NavLink className='fw-bold' to={"/contact"}>Football</NavLink>
        <NavLink className='fw-bold' to={"/contact"}>Relationship</NavLink>
        {
          login === true ?
            <>

              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret size="sm">
                  <IoMdContact />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> <button onClick={() => dispatch(logout())} className='w-75 m-auto btn btn-md btn-danger'>Logout</button> </DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
            </>
            :

           <NavLink href="/login">
            Login
           </NavLink>
        }
      </div>
    </div>
  )
}

export default Header