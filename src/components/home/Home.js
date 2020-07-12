import React from 'react';

import Navbar from '../navbar/Navbar';

import './Home.css'

export default function Home(){
    return(
        <div className="container-fluid">
            <Navbar />
            <h1>Home1</h1>
            <h1>Home2</h1>
            <h1>Home3</h1>
        </div>
    );
}