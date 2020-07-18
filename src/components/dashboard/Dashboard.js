import React, { Component } from 'react';

import Sidenav from '../sidenav/Sidenav';

import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div className="userPage">
                <Sidenav/>
                <div className="container-fluid dashboard">
                    <h5>Statistics</h5>
                    <div className="logs row justify-center">
                        <div className="logcol col-sm-4 mt-2 d-flex justify-content-center">
                            <div className="logscard card text-center first">
                                <h1>20/<sub>30</sub></h1>
                                <h6>Mails Remaining</h6>
                            </div>
                        </div>
                        <div className="logcol col-sm-4 mt-2 d-flex justify-content-center">
                            <div className="logscard card text-center second">
                                <h1>10</h1>
                                <h6>Mails Parsed</h6>
                            </div>
                        </div>
                        <div className="logcol col-sm-4 mt-2 d-flex justify-content-center">
                            <div className="logscard card text-center third">
                                <h1>20</h1>
                                <h6>Contacts Scraped</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;




