import React, {Component,useState,useEffect,} from "react";

import ad from '../assets/u7.png';

const Header = ()=>{
    return (
    <div className="header">
        <div className="head-up">
            <div className="logo">
                {/* <img src="/" alt="logo"/> */}
                <span>drv</span>
            </div>
            
            <div className="adver-bg">
                <span>Patronat:</span>
                <img src={ad} alt="ad" id="ad"/>
            </div>
            
            <div className="login">
                <span>user login</span>
                <span>72 punkty | wyloguj</span>
            </div>
        </div>
        <div className="head-down">
            <div className="head-buttons">
                <button>Porady</button>
                <button>Forum</button>
                <button>Quiz</button>
            </div>
        </div>




    </div>);
}

export default Header;