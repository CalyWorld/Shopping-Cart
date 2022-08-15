import React from "react";
import {FaGithub} from "react-icons/fa";
import "../ContactPage/contact-asset/contactPage.css"
const ContactPage = () => {

    const iconStyle = {
        width: "50px",
        height: "50px",
        color: "black"
      };

    return (
        <div className="contact-container">
            <h1>You Can Reach out to me Here</h1>
            <a href="https://github.com/CalyWorld" target="_blank" rel="noopener noreferrer"><FaGithub style={iconStyle}/></a>
        </div>
    )
}

export default ContactPage;