import React from 'react';

import Navbar from '../navbar/Navbar';

import './Pricing.css';

export default function Pricing(){
    return(

        <div className="Home container-fluid">
            <Navbar />
            <div class="mtHome"></div>
            <h1 className="line headline">
                Data Extraction from <span className="themeText blink">EMail</span>
            </h1>
            <div className="center container row pricingContent card-deck">
                <div className="pricing-box col-md-auto text-center">
                    <h6 className="planName">Free</h6>
                    <p className="price">&#8377;0</p>
                    <ul className="features-list">
                        <li><strong>30</strong> Emails</li>
                        <li><strong>Unlimited Downloads</strong></li>
                        <li><strong>2 </strong> Days Download Validity</li>
                        <li><strong>Tech Support</strong></li>
                    </ul>
                    <button className="btn-primary">Start Free Trial</button>
                </div>
                <div className="pricing-box col-md-auto text-center">
                    <h6 className="planName">Business</h6>
                    <p className="price">&#8377;1500</p>
                    <ul className="features-list">
                        <li><strong>2000</strong> Emails</li>
                        <li><strong>Unlimited Downloads</strong></li>
                        <li><strong>7 </strong> Days Download Validity</li>
                        <li><strong>Tech Support</strong></li>
                    </ul>
                    <button className="btn-primary">Get Started</button>
                </div>
                <div className="pricing-box col-md-auto text-center">
                    <h6 className="planName">Premium</h6>
                    <p className="price">&#8377;2000</p>
                    <ul className="features-list">
                        <li><strong>3000</strong> Emails</li>
                        <li><strong>Unlimited Downloads</strong></li>
                        <li><strong>15 </strong> Days Download Validity</li>
                        <li><strong>Tech Support</strong></li>
                    </ul>
                    <button className="btn-primary">Get Started</button>
                </div>
            </div>

            <div className="center">
                <form class="form-inline center">
                    <label class="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>

                    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    
                    <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
                        <div class="input-group-prepend">
                            <div class="input-group-text">&#8377;</div>
                        </div>
                    </div>

                    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    
                    <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
                        <div class="input-group-prepend">
                            <div class="input-group-text">&#8377;</div>
                        </div>
                    </div>
                </form>
            </div>

        </div>  
    );
}