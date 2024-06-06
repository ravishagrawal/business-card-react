import React from "react"

export default function Info () {
    return (
        <header>
            <img src ="./images/Ravish.jpeg" className="img-profile" />
            <h1 className= "profile-name"> Ravish Agrawal </h1>
            <p className= "profile-title"> FrontEnd Developer</p>
            <p className= "profile-website"> ravish.website </p>
            <div className="contact">
                <a href= "" className="email"> <i className="fa-solid fa-envelope icon-gap"></i>Email </a>
                <a href= "https://www.linkedin.com/in/ravishagrawal/" className="linkedin"> <i className="fa-brands fa-linkedin icon-gap"></i>LinkedIn </a>
            </div>
        </header>
    )
}