import React, {Component} from 'react';
import { connect } from "react-redux";

class Reference extends React.Component{

    render(){

        const id = 24;
        const image = "https://pbs.twimg.com/media/FklNcCJWQAMmxL2?format=jpg&name=900x900";
        //Remove this later obviously, this is just for the sake of having a filler.
        const source = "https://twitter.com/palmie_oekaki/status/1605899894669168641";
    
        //so tags will be implemented later once this is off the ground
        // const hasTags = tags.length > 0
        // const nodes = hasTags ? (
        //     <Tag 
    
        //     />
        // ) : (
        //     <em>No tags are available for this reference.</em>
        // )

        return (
            <div>
                <img src={image} />
                <p>Source: {source}</p>    
                <p>ID: {source}</p>    
            </div>
        )
    }
}

export default Reference;