import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="container">
            <form action="" onsubmit="sendEmail(); reset(); return false">
                <h3>Get in Touch </h3>
                <input type="text" id="name" placeholder="Your Name" required/>
                <input type="email" id="email" placeholder="Email Id" required/>
                <input type="text" id="phone" placeholder="Phone Number" required/>
                <textarea  id="message" cols="30" rows="4" placeholder="How can we Help you?"></textarea>
                <button type="submit"> Send</button>
            </form>
        </div>
        )
    }
}
export default Contact;