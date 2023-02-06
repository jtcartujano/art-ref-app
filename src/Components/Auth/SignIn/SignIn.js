import React from 'react'

class SignIn extends React.Component {
    state = {

    }
    handleChange = (e) =>{
        console.log(e)
    }
    
    handleSubmit = (e) =>{
        console.log(e)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <p>Sign In</p>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn