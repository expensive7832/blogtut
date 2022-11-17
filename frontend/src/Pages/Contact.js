import axios from 'axios'
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"


function Contact() {


    const handleSubmit = (e) =>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        axios.post("http://localhost:5000/contact", form )
        .then((res) => {
            if(res?.data?.message === "enter your information"){
                alert(res?.data?.message);

            }else if(res?.data?.message === "email sent successfully"){
                alert(res?.data?.message)
            }
        })
        .catc((e) => console.log(e))
    }

  return (
   <div className="contact">
    
<section className="container mb-4">
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row align-items-center">
    {/*Grid column*/}

    <div className="col-md-9 mb-md-0 mb-5">
      <form id="contact-form" name="contact-form" onSubmit={(e) => handleSubmit(e)}>
       
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-3">
              <label htmlFor="name" className>Your name</label>
              <input required type="text" id="name" name="name" className="form-control" />
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-3">
              <label htmlFor="email" className>Your email</label>
              <input required type="text" id="email" name="email" className="form-control" />
            </div>
          </div>
          {/*Grid column*/}
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-3">
              <label htmlFor="subject" className>Subject</label>
              <input required type="text" id="subject" name="subject" className="form-control" />
            </div>
          </div>
        </div>
       
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form mb-3">
              <label htmlFor="message">Your message</label>
              <textarea required type="text" id="message" name="message" rows={4} className="form-control md-textarea" defaultValue={""} />
            </div>
          </div>
        </div>
        
      <div className="text-center text-md-left">
        <button type='submit' className=" btn w-25 btn-lg btn-primary">Send</button>
      </div>

      </form>
      <div className="status" />
    </div>
    {/*Grid column*/}
    {/*Grid column*/}
    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li> <a className='nav-link' target='_blank' href="https://www.google.com/maps/place/Daddy+Oniyide+St,+Agege+102212,+Lagos/@6.6301234,3.3062203,17z/data=!3m1!4b1!4m5!3m4!1s0x103b91183fe7d7e7:0xfa42296273d4d225!8m2!3d6.6301234!4d3.308409?hl=en"><FaMapMarkerAlt/></a>
          <p>Daddy oniyinde street</p>
        </li>
        <li><BsFillTelephoneFill/>
          <p><a className='nav-link' href="tel:+2348166398746">+2348166398746</a></p>
        </li>
        <li><FaEnvelope/>
          <p><a className='nav-link' href="mailto:expensive7832@gmail.com">Expensive7832@gmail.com</a></p>
        </li>
      </ul>
    </div>
    {/*Grid column*/}
  </div>
</section>


   </div>
  )
}

export default Contact