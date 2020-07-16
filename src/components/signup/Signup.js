import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Signup.css';
import { render } from '@testing-library/react';

class Signup extends Component{
    state = {
        firstName:''
    }

    handleChange=(event)=> {
        this.setState=({
            firstName:event.target.value
        })
        console.log(this.state.firstName)
    };
    render(){
        return(
            <div className="trans">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fe4701" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,202.7C384,235,480,245,576,250.7C672,256,768,256,864,250.7C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="container signupSect">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card signup_card">
                            <a className="d-flex justify-content-center" href="/">
                                <div className="brand_logo_container">
                                    <h5><span className="themeText">parseme</span>.io</h5>
                                </div>
                            </a>
                            <div className="d-flex justify-content-center form_container">
                                <form className="signupForm">
                                    <div className="form-row">
                                        <div className="col-md-6 input-group mb-3">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" name="firstName" onChange={this.handleChange} className="form-control input_user"placeholder="First Name" required="true"/>
                                        </div>
                                        <div className="col-md-6 input-group mb-3">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" name="lastName" className="form-control input_user" placeholder="Last Name" required="true"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 input-group mb-3">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                            </div>
                                            <input type="text" name="phoneNumber" className="form-control input_user"placeholder="Phone Number" required="true"/>
                                        </div>
                                        <div className="col-md-6 input-group mb-3">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-envelope-o"></i></span>
                                            </div>
                                            <input type="email" name="email" className="form-control input_user"placeholder="Email" required="true"/>
                                        </div>
                                    </div>
    
                                    <div className="form-row">
                                        <div className="col-md-6 input-group mb-2">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-key"></i></span>
                                            </div>
                                            <input type="password" name="password" className="form-control input_pass" placeholder="Password" required="true"/>
                                        </div>
                                        <div className="col-md-6 input-group mb-2">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-key"></i></span>
                                            </div>
                                            <input type="password" name="confirmPassword" className="form-control input_pass" placeholder="Confirm Password" required="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control mt-3 custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" required="true"/>
                                            <label className="custom-control-label" for="customControlInline"><Link to="/terms">Terms of Services</Link> & <Link to="/privacy policy">Privacy Policy</Link></label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 login_container signup_container">
                                        <button className="btn login_btn">Create Account</button>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-3">
                                <div className="d-flex justify-content-center links">
                                    Already Registered?
                                    <Link className="ml-2" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;