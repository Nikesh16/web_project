import React from "react";
import videoBG from '../assets/mountain.mp4';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(

            <>
            <div className="wrapper">
                <video autoPlay loop muted id="video-bg">
                    <source src={videoBG} type="video/mp4" />
                </video>
            </div><div className="sign-up">
                  <Link to ='/register'>  Register Now</Link>  
                
                </div></>
        )
    }
}
export default Home;