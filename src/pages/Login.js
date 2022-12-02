import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return(

            <><div class="bg-img">

                <div class="content">
                    <header>Login Form</header>
                    <form action="#">
                        <div class="field">
                            <span></span>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div class="field">
                            <span></span>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="field space">

                            <span>  <a href="">Forget Password?</a></span>
                            <input class="login-btn" type="submit" value="Login" />
                        </div>
                        <div class="login">Or login with </div>
                        <div class="link">
                            <div class="github">
                                <i class="fa fa-github"></i>
                                <span>Github</span>
                            </div>
                            <div class="vk">
                                <i class="fa fa-vk"></i>
                                <span>VK</span>
                            </div>
                        </div>
                        <div class="register-now">
                            Don't have an account? 
                        </div>
                       
                            
                            
                        <Link to ='/register'><span>Register Now!</span> </Link> 
                        <Link to ='/'> <span>Back to Home </span></Link>  

                    </form>
                </div>

            </div></>
        )
    }
}
export default Login;