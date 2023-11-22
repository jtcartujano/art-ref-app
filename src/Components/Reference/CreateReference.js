import React from 'react';
import { connect } from 'react-redux';
import { createReference } from '../../Redux/Actions/referenceActions';

class CreateReference extends React.Component {
    state = {
        image: '',
        source: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state);

        this.props.createReference(this.state)
    }
    // Draft of what to have laid out while creating it
    // image, source, tags, checkbox to agree that the source has given permission for this to be
    // shared, and for the submission to be approved etc

    render(){
        return(
            <div class="grid place-items-center h-1/2">
                <form onSubmit={this.handleSubmit} >
                    <div class="relative mb-2">
                        <input type="text" id="source" name="source" 
                            class="h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                            placeholder=" "
                            onChange={this.handleChange} />
                        <label for="source" 
                            class="pr-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Image Source
                        </label>
                    </div>

                    <div class="relative mb-2">
                        <label for="tags" class=""
                        >
                            Tags
                        </label>
                        <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="tags" name="tags"
                            placeholder=" " onChange={this.handleChange} />
                    </div>

                    <div class="relative mb-2">
                        <input type="checkbox" id="agree" name="agree" 
                            class="h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                            placeholder=" "
                            onChange={this.handleChange} />
                        <label for="agree" 
                            class=""
                        >
                            Some formal text about agreeing to some terms goes here.
                        </label>
                    </div>

                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReference: (reference) => dispatch(createReference(reference))
    }
}

export default connect(null, mapDispatchToProps)(CreateReference)