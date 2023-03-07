import React, {Component} from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

const ReferencePreview = ({reference}) => {
    let url = '/view/' + reference.id;
    // there's hopefully a nicer way to do this, figure it out later

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <NavLink to={url}>
                <img src={reference.image} />
            </NavLink>
        </div>
    )
}

export default ReferencePreview;