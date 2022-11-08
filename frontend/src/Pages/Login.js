import React from 'react'
import { Col, Container, NavLink, Row } from 'reactstrap'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { checkLogin, userInfo } from '../Redux/Slices/UserSlices'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

       await axios.post("http://localhost:5000/login", form)
       .then((res) =>{
        if(res?.data?.message === "input field cannot be empty"){
            alert(res.data.message);
            
        }else if(res?.data?.message === "email not found"){
            alert(res.data.message);

        }else if(res?.data?.message === "login successful"){
            dispatch(userInfo(res?.data?.userInfo))
            dispatch(checkLogin())
            alert(res.data.message)
            navigate("/");

        }else if(res?.data?.message === "Invalid Credentials"){
            alert(res.data.message)
        }
       })
    }

    return (
        <div className="login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label className="form-label">Email</label>
                    <input type="text" name='email' className="form-control" />
                </div>

                <div>
                    <label className="form-label">Password</label>
                    <input type="password" name='pwd' className="form-control" />
                </div>

                <button className='btn btn-lg btn-info w-100 my-3' type="submit">Login</button>
            </form>

           <span className='text-white fw-bold'>
           <small className=''>New user?</small>
            <NavLink href="/signup">Register</NavLink>
           </span>
        </div>
    )
}

export default Login