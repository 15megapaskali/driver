import React, {Component,useState,useEffect,} from "react";

import Header from './Header'
import Main from './MainBanner'
import Topics from './Topics'
import Ask from './Ask'


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Main/>
            <Ask/>
            <Topics/>

        </div>
    );
}

export default Home;