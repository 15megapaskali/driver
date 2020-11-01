import React, {Component,useState,useEffect,} from "react";

import Topic from './Topic';

const Topics = ()=>{
    return (
        <div className="topics">
            <Topic/>
            <Topic/>
            <Topic/>
        </div>
    );
}

export default Topics;