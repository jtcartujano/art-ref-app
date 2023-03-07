import React, {Component} from 'react';
import { connect } from "react-redux";

const Reference = () => {
    const id = 24;
    const image = "https://pbs.twimg.com/media/FklNcCJWQAMmxL2?format=jpg&name=900x900";
    //Remove this later obviously, this is just for the sake of having a filler.
    const source = "https://twitter.com/palmie_oekaki/status/1605899894669168641";

    return (
        <div>
            <img src={image} />
            <p>Source: {source}</p>    
            <p>ID: {id}</p>    
        </div>
    )
}

export default Reference;