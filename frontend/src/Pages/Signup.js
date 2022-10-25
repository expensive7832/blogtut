import React from 'react'
import { Col, Container, Row } from 'reactstrap'


function Signup() {
    return (
        <div className="signup">
            <form>
                <div>
                    <lable className="form-label">Name</lable>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <lable className="form-label">Email</lable>
                    <input type="email" className="form-control" />
                </div>
                <div>
                    <lable className="form-label">Password</lable>
                    <input type="password" className="form-control" />
                </div>

                <div>
                    <lable className="form-label">Photo</lable>
                    <input type="file" className="form-control" />
                </div>

                <button className='btn btn-lg btn-info w-100 my-3' type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup