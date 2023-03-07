import React from 'react';
import PageWarning from '../../PageWarning/PageWarning.js';
import FilterList from '../../Layout/FilterList/FilterList.js';
import { connect } from 'react-redux';
import ReferenceList from '../../Reference/ReferenceList.js';

const MainPage = (props) => {

    console.log("props");
    const { references } = props;
    console.log(references);

    return (
        <div class="grid grid-cols-4 min-h-screen">
            <div class="flex col-span-1 p-4 max-w-sm">
                <FilterList />
            </div>

            <div class="col-span-3 p-4">
                
                <div class="w-1/2 py-4">
                    <PageWarning />
                </div>
                <div class="">
                    <p>this will be to showcase popular tags, new additions etc</p>
                </div>

                <ReferenceList references={references} />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        references: state.reference.references
    }
}

export default connect(mapStateToProps)(MainPage)