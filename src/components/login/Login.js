import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

export default function Login(){
    return(
        <div className="trans">
            <div className="row extra"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fe4701" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,266.7C384,245,480,171,576,133.3C672,96,768,96,864,128C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <a className="d-flex justify-content-center" href="/">
                            <div className="brand_logo_container">
                                <h5><span className="themeText">parseme</span>.io</h5>
                            </div>
                        </a>
                        <div className="d-flex justify-content-center form_container">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-envelope-o"></i></span>
                                    </div>
                                    <input type="email" name="" className="form-control input_user"placeholder="Registered Email" required="true"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-key"></i></span>
                                    </div>
                                    <input type="password" name="" className="form-control input_pass" placeholder="Password" required="true"/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                        <label className="custom-control-label" for="customControlInline">Remember me</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button className="btn login_btn">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
						        Don't have an account?
                                <Link className="ml-2" to="/signup">Sign Up</Link>
					        </div>
                            <br/>
					        <div className="d-flex justify-content-center links">
					        	<a href="/">Forgot your password?</a>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
        </div>
    );
}