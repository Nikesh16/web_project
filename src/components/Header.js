import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="header">
                <nav className="navigation">

                <Link to="/"><a href="#" className="navbar-logo"><span>Tr</span>avel</a></Link>
                <div className="navbar-right">
                  <a href="#">Our Team</a>
                  <a href="blog.html">Blog</a>
                  <Link to ='/contact'>  Contact Us</Link>  
                  <Link to ='/login'>  Login</Link>  

        
                </div>
              </nav>
            </div>
        </header>        
        )
    }
}
export default Header;