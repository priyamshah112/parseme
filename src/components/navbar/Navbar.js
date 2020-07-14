import React from 'react';
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar d-flex navbar-expand-lg fixed-top row">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/"><span className="company-name">Parser</span><span className="domain-name">.io</span></a>
            <div className="collapse navbar-collapse row" id="navbarToggler">
                <ul className="nav-items navbar-nav col-sm-6">
                    <a className="btn nav-button" href="features">Features</a>
                    <a className="btn nav-button" href="pricing">Pricing</a>
                    <a className="btn nav-button" href="contact">Contact Us</a>
                </ul>
                <ul className="navbar-nav col-sm-2 offset-md-4">
                    <a className="btn login log-btn mt-1 raise" href="/">Login</a>
                    <a className="btn signup log-btn mt-1 raise" href="/">Signup</a>
                </ul>
            </div>
        </nav> 
    );
}