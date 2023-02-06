import React from 'react';
import Header from '../../Layout/Header/Header.js';
import Footer from '../../Layout/Footer/Footer.js';
import Reference from '../../Reference/Reference.js';
import PageWarning from '../../PageWarning/PageWarning.js';
import ReferencePreview from '../../Reference/ReferencePreview.js';
import FilterList from '../../Layout/FilterList/FilterList.js';

class MainPage extends React.Component {

    render(){
        return (
            <div class="grid grid-cols-4 min-h-screen">
                <div class="col-span-4 pb-2">
                    <Header/>
                </div>
                <div class="col-span-4 py-4 justify-self-center">
                    <PageWarning />
                </div>
                <div class="col-span-4">
                    <p>this will be to showcase popular tags, new additions etc</p>
                </div>

                <div class="flex col-span-1 p-4 max-w-sm">
                    <FilterList />
                </div>

                <div class="col-span-3 p-4">
                    <div class="grid grid-cols-3 gap-4">
                        {/* nested grid to display the thumbnails */}
                        
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>
                        <div>
                            <ReferencePreview/>
                        </div>


                    </div>
                </div>

                <div class="col-span-4 sticky top-[100vh] bg-neutral-600">
                    <Footer />
                </div>

                {/* <div class="col-span-2">
                    <p>and this is where a footer will go</p>
                </div> */}

            </div>
        )
    }
}

export default MainPage