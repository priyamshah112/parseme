import React from 'react';

import Navbar from '../navbar/Navbar';

import AutomateBusiness from '../../images/AutomateBusiness.png';
import EmailToLead from '../../images/EmailToLead.png';
import HighlyScalable from '../../images/HighlyScalable.png';
import './Features.css';

export default function Features(){
    return(
        <div class="featuresPage container-fluid">
            <Navbar/>
            <div className="center featuresDiv">
                <div class="mtHome "></div>
                <h1 className="headline">
                    <span className="featuresHeadline themeText">Features</span>
                </h1>
                <div className="row container featureContent">
                    <div className="center workflow imageContent col-md-6 col-sm-6 order-sm-12">
                        <img className="image" src={ AutomateBusiness } alt="workflow"/>
                    </div>
                    <div className="featureText col-md-6 col-sm-6 order-sm-1">
                        <h3 class="themeText center featureHead">Lorem Ipsum</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                      
                    </div>
                </div>
                <div className="row container featureContent">
                    <div className="center workflow imageContent col-md-6 col-sm-6 order-sm-1">
                        <img className="image" src={ EmailToLead } alt="workflow"/>
                    </div>
                    <div className="featureText col-md-6 col-sm-6 order-sm-12">
                        <h3 class="themeText center featureHead">Lorem Ipsum</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                      
                    </div>
                </div>
                <div className="row container featureContent">
                    <div className="center workflow imageContent col-md-6 col-sm-6 order-sm-12">
                        <img className="image" src={ HighlyScalable } alt="workflow"/>
                    </div>
                    <div className="featureText col-md-6 col-sm-6 order-sm-1">
                        <h3 class="themeText center featureHead">Lorem Ipsum</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                      
                    </div>
                </div>
                <div className="row container featureContent">
                    <div className="center workflow imageContent col-md-6 col-sm-6 order-sm-1">
                        <img className="image" src={ HighlyScalable } alt="workflow"/>
                    </div>
                    <div className="featureText col-md-6 col-sm-6 order-sm-12">
                        <h3 class="themeText center featureHead">Lorem Ipsum</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                      
                    </div>
                </div>
            </div>
        </div>
    );
}