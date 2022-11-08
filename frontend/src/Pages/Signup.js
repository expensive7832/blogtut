import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {

    const navigate = useNavigate()
    
const handleSubmit = async(e) =>{
    
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    await axios.post("http://localhost:5000/signup", form)
    .then((res) => {
      if(res?.data?.message == "input field cannot be empty"){
        alert(res?.data?.message);

      }else if(res?.data?.message === "photo is required"){
        alert(res?.data?.message);

      }else if(res?.data?.message === "Account Successfully Created"){
        alert(res?.data?.message);
        navigate("/login")
      }
    })
    .catch((err) => console.log(err))
}

    return (
        <div className="signup">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label className="form-label">Name</label>
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