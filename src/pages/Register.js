import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <><div className="bg-img">

                <div className="content">
                    <header>Register form</header>
                    <form action="#">
                        <div className="field">
                            <span></span>
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="field">
                            <span></span>
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="field">
                            <span></span>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="field">
                            <span></span>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="field">
                            <span></span>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="field">
                            <span></span>
                            <input type="submit" value="Register" />
                        </div>
                        <div className="login-now">
                            Already have an account?
                        </div>
                        <span><Link to ='/login'>  Login Now</Link>  
</span>


                    </form>
                </div>

            </div><button type="button"> <a href="index.html">HOME</a></button></>

        );
    }
}

export default Register;
