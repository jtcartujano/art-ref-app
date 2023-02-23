import React, {Component} from 'react';
import Header from '../../Layout/Header/Header.js';
import Reference from '../../Reference/Reference.js';
import PageWarning from '../../PageWarning/PageWarning.js';

const ViewPage = (props) => {
    const id = props.match.params.id;

    return (
        <div class="grid place-items-center">
            <div class="row py-4">
                <PageWarning />
            </div>
            <div class="row">
                <p>this will be to showcase popular tags, new additions etc</p>
            </div>
            <div class="row-span-2">
                <p>this is roughly where tags and stuff will go</p>
            </div>

            <div class="row-span-5">
                <Reference/>
                <p>page id for testing purposes: {id}</p>
            </div>
        </div>
    )
}

export default ViewPage