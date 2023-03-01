import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


function Login() {
    let [user,setUser] = useState('')
    let [password,setPassword] = useState('')
    // console.log(user,password)
  return (

    <div className="container mt-5">
    <div className="d-flex justify-content-center h-100">
        <div className="user_card">
            <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo">
                </div>
            </div>
            <div className="d-flex justify-content-center form_container">
                <Form>
                    <Form.Group className="input-group mb-3">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <Form.Control type="text" className="form-control input_user"  placeholder="username" onChange={(e)=>setUser(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="input-group mb-2">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <Form.Control type="password" className="form-control input_pass" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <div className="custom-control custom-checkbox">
                            <Form.Control type="checkbox" className="custom-control-input" id="customControlInline"/>
                            <Form.Label className="custom-control-label" >Remember me</Form.Label>
                        </div>
                    </Form.Group>
                        <div className="d-flex justify-content-center mt-3 login_container">
                 <Button type="button" name="button" className="btn login_btn">Login</Button>
               </div>
                </Form>
            </div>
    
            <div className="mt-4">
                <div className="d-flex justify-content-center links">
                    Don't have an account? <div href="action" className="ml-2">Sign Up</div>
                </div>
                <div className="d-flex justify-content-center links">
                    <a href="action">Forgot your password?</a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Login;
