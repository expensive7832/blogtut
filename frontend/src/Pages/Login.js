import React from 'react'
import { Col, Container, Row } from 'reactstrap'


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
        </div>
    )
}

export default Login