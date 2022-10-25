import React from 'react'
import { Col, Container, NavLink, Row } from 'reactstrap'


function Login() {
    return (
        <div className="login">
            <form>
                <div>
                    <lable className="form-label">Email</lable>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <lable className="form-label">Password</lable>
                    <input type="password" className="form-control" />
                </div>

                <button className='btn btn-lg btn-info w-100 my-3' type="button">Login</button>
            </form>

           <span className='text-white fw-bold'>
           <small className=''>New user?</small>
            <NavLink href="/signup">Register</NavLink>
           </span>
        </div>
    )
}

export default Login