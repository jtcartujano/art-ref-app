import React from 'react'

class SignIn extends React.Component {
    // this and signup are to be changed into functional components once i learn how to change handlers as such
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }


    render(){
        return(
            <div class="grid place-items-center h-1/2">
                <div class="flex justify-center w-1/3 px-8 py-8 bg-gray-100 rounded-lg">
                    <form onSubmit={this.handleSubmit} >

                        <div class="relative mb-2">
                            <input type="email" id="email" name="email" 
                                class="h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                                placeholder=" "
                                onChange={this.handleChange} />
                            <label for="email" 
                                class="pr-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                                Email Address
                            </label>
                        </div>
                        
                        <div class="relative mb-2">
                            <input type="password" id="password" name="password" 
                                class="h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                                placeholder=" "
                                onChange={this.handleChange} />
                            <label for="email" 
                                class="pr-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                                Password
                            </label>
                        </div>

                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Login
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn