import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import axios from "axios"

function Signup() {


    
const handleSubmit = async(e) =>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    await axios.post("http://localhost:5000/signup", form)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

    return (
        <div className="signup">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <lable className="form-label">Name</lable>
                    <input type="text" name="myname" className="form-control" />
                </div>

                <div>
                    <lable className="form-label">Email</lable>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div>
                    <lable className="form-label">Password</lable>
                    <input type="password" name="pwd" className="form-control" />
                </div>

                <div>
                    <lable className="form-label">Photo</lable>
                    <input type="file" name='photo' className="form-control" />
                </div>

                <button className='btn btn-lg btn-info w-100 my-3' type="submit">Register</button>
            </form>
            
        </div>
    )
}

export default Signup