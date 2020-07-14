import React from 'react';

import Navbar from '../navbar/Navbar';

import './Pricing.css';

export default function Pricing(){
    return(

        <div className="pricingPage container-fluid">
            <Navbar />
            <div className="mtHome"></div>
            <h1 className="headline">
                <span className="themeText blink">Pricing</span>
            </h1>
            <br/>
            <br/>
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
            <br/>
            <br/>
            <div className="customPriceSect gray center">
                <h3 className="headline">
                    Customize according to need.
                </h3>
                <form className="form-inline center">
                    <input type="number" min="1" className="form-control mb-2 mr-sm-5" id="inlineFormInputName2" placeholder="Number of Mails"/>
                    
                    <div className="symbol input-group mb-2 mr-sm-5">
                        <div className="input-group-prepend">
                            <div className="input-group-text">&#xd7;</div>
                        </div>
                    </div>
                    
                    <div className="input-group mb-2 mr-sm-5">
                        <input type="text" disabled="disabled" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Price Per Mail"></input>
                        <div className="input-group-prepend">
                            <div className="input-group-text">&#8377;</div>
                        </div>
                    </div>

                    <div className="symbol input-group mb-2 mr-sm-5">
                        <div className="input-group-prepend">
                            <div className="input-group-text">&#x3d;</div>
                        </div>
                    </div>
                    
                    <div className="input-group mb-2 mr-sm-5">
                        <input type="text" disabled="disabled" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Total Price"></input>
                        <div className="input-group-prepend">
                            <div className="input-group-text">&#8377;</div>
                        </div>
                    </div>
                    <div className="symbol input-group mb-2 mr-sm-5">
                        <button className="priceBtn btn">Submit Price</button>
                    </div>
                </form>
                <div className="highQuote container center form-inline row">
                    <h3 className="headline input-group col col-lg-8 mb-2 mt-2">
                        Higher Requirement ?
                    </h3>
                    <div className=" col col-lg-4 qBtn input-group mb-2 mt-2">
                        <button className="priceBtn quoteBtn btn">Get Quote</button>
                    </div>
                </div>
            </div>

        </div>  
    );
}