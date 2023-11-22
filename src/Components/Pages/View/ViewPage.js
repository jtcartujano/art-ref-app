import React, {Component} from 'react';
import Header from '../../Layout/Header/Header.js';
import Reference from '../../Reference/Reference.js';
import PageWarning from '../../PageWarning/PageWarning.js';

const ViewPage = (props) => {
    const id = props.match.params.id;

    return (
        <div class="grid place-items-center py-4">
            <div class="col-span-2">
                <div class="bg-slate-500 pt-4 pl-6 rounded text-white flex flex-col max-w-sm">
                    <p>Tags go here I guess</p>
                </div>
            </div>

            <div class="col-span-10">
                <div class="row">
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
        </div>
    )
}

export default ViewPage