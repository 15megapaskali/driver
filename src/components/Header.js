import React, {Component,useState,useEffect,} from "react";

const Header = ()=>{
    return (
    <div className="header">
        <div className="head-up">
            <img src="/" alt="logo"/>
            <img src="/" alt="ad"/>
            <div className="login">
                
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