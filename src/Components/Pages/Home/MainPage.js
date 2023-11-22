import React from 'react';
import PageWarning from '../../PageWarning/PageWarning.js';
import FilterList from '../../Layout/FilterList/FilterList.js';
import { connect } from 'react-redux';
import ReferenceList from '../../Reference/ReferenceList.js';
import Pagination from '../../Layout/Pagination/Pagination.js';

const MainPage = (props) => {

    console.log("props");
    const { references } = props;
    const { tags } = props;
    console.log(references);
    console.log("tags");
    console.log(tags);

    return (
        <div class="grid grid-cols-4 min-h-screen">
            <div class="flex col-span-1 p-4 max-w-sm">
                <FilterList />
            </div>

            <div class="col-span-3 p-4">
                
                <div class="w-1/2 py-4">
                    <PageWarning />
                </div>
                <div class="w-1/6 justify-self-end">
                    {/* Display options */}
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Results per page</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                        <option value="100">100</option>
                    </select>

                </div>

                <ReferenceList references={references} />

                <Pagination />
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