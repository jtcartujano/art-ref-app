import React, {Component} from 'react';
import Header from '../../Layout/Header/Header.js';
import Reference from '../../Reference/Reference.js';
import PageWarning from '../../PageWarning/PageWarning.js';

class ViewPage extends React.Component {

    render(){
        return (
            <div class="grid">

                <div class="row pb-2">
                    <Header/>
                </div>
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
                </div>

                <div class="row">
                    <p>and this is where a footer will go</p>
                </div>
                
                
                <p>VIEW paaaaage</p>
            </div>
        )
    }
}

export default ViewPage