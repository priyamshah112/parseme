import React from 'react';
import { Link } from 'react-router-dom';

import './Sidenav.css';

class Sidenav extends React.Component{
    render(){
        return(
        <div className="sidenav">
            <input type="checkbox" id="check"/>
            <div className="hamburger row">
                <label for="check">
                    <i className="fa fa-bars"></i>
                </label>
                <span className="navbar-brand brand">
                    <span className="company-name">Parser</span><span>.io</span>
                </span>
            </div>
            <div className="sidebar">
                    <label for="check">
                        Close <i className="fa fa-times"></i>
                    </label>
                <ul>
                    <li className="navbar-brand brand">
                        <span className="company-name">Parser</span>.io
                    </li>
                    <hr/>
                    <span className="color">Hello Mihir</span>
                    <li className="sidenav-active">
                        <Link to="/" className="color"><i className="fa fa-dashboard"></i><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to="/"  className="color"><i className="fa fa-dashboard"></i><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to="/"  className="color"><i className="fa fa-dashboard"></i><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <a href="/" className="color"><i className="fa fa-sign-out"></i><span>Logout</span></a>
                    </li>
                </ul>
                
            </div>
        </div>
        )
    }
}

export default Sidenav;