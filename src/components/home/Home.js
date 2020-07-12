import React from 'react';

import Navbar from '../navbar/Navbar';
import Workflow from '../../images/email-parser-workflow.png';

import './Home.css'


export default function Home(){
    return(
        <div className="Home container-fluid">
            <Navbar />
            <div class="mtHome gray"></div>
            <section className="section">
                <h1 className="line headline">
                    Data Extraction from <span className="themeText blink">EMail </span>
                </h1>
                <div className="center container">
                    <h3>Our ability to parse the <span className="themeText">Email</span> and extract <span className="themeText">Contact Data</span> points.</h3>
                    <h3>Save hours and efforts from manual data entry.</h3>
                    
                    <h3 className="business">Automate your Business</h3>
                    
                    <a className="btn parseBtn btnBlink" href="/">Parse Your Email<span className="icon"><i class="fa fa-hand-o-right"></i></span></a>
                </div>
            </section>
            
            <section className="section gray">
                <h4 className="line headline themeText">
                   Save time and money with a fully automated business process
                </h4>
                <div className="center container workflow">
                    <img src={ Workflow } alt="workflow"/>
                    <br/>
                    <br/>
                    <a className="btn parseBtn" href="/">Use it for <span className="themeText">Free</span> <span className="icon"><i class="fa fa-hand-o-right"></i></span></a>
                </div>
            </section>
            <section className="section">
                <h4 className="headline">
                   Watch Our Instruction Video
                </h4>
                <div className="center container videoDiv">
                    
                    <iframe src="https://www.youtube.com/embed/Xy55MsXE2qI" title="Mihir Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </section>
        </div>
    );
}