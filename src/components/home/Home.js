import React from 'react';

import Navbar from '../navbar/Navbar';

import Footer from '../footer/Footer';
import BottomLine from '../bottomLine/BottomLine';

import Workflow from '../../images/email-parser-workflow.png';
import './Home.css'


export default function Home(){
    return(
        <div className="Home container-fluid">
            <Navbar />
            <div class="mtHome"></div>
            <section className="section">
                <h1 className="line headline">
                    Data Extraction from <span className="themeText blink">EMail</span>
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
            <section className="section gray">
                <h4 className="headline">
                   Features
                </h4>
                <div className="center row features container-fluid">
                    <div className="feature col-md-3 col-sm-8">
                        <i class="feature-icon fa fa-envelope-o"></i>
                        <h4 className="headline mt-2">
                            Mail Read
                        </h4>
                        <p className="featureText themeText headline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="feature col-md-3 col-sm-8">
                        <i class="feature-icon fa fa-envelope-o"></i>
                        <h4 className="headline mt-2">
                            Mail Read
                        </h4>
                        <p className="featureText themeText headline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="feature col-md-3 col-sm-8">
                        <i class="feature-icon fa fa-envelope-o"></i>
                        <h4 className="headline mt-2">
                            Mail Read
                        </h4>
                        <p className="featureText themeText headline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                {/* <div className="footer"></div> */}
                {/* <Footer/> */}
                

                {/* Copyright &copy; &nbsp;&nbsp;&nbsp;Made with <span role="img" aria-label="Heart Emoji">❤️️</span> by Mihir and Priyam */}
                {/* <Footer/>
                <BottomLine/> */}
            </section>
        </div>
    );
}