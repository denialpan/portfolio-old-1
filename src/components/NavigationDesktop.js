import React from 'react'
import { Link } from 'react-router-dom'
import githubIcon from '../images/icon-github.svg'
import facebookIcon from '../images/icon-facebook.svg'
// import redditIcon from '../images/icon-reddit.svg'
import linkedinIcon from '../images/icon-linkedin.svg'

function NavigationDesktop() {
    return (
        <div>
            <span> <Link to="/">Home</Link> </span>
            <span> <Link to="/about">About</Link> </span>
            <span> <Link to="/projects">Projects</Link> </span>
            <span> <Link to="/blog">Blog</Link> </span>
            <span> <Link to="https://raw.githubusercontent.com/denialpan/portfolio/e12d72e76df82d26bf3e11d32789cb6a81767a81/src/Daniel%20Pan%20-%20Resume.pdf" target="_blank" >Resume</Link> </span>

            {/* <span className="svg-right-icons"> <Link to="https://www.reddit.com/user/dern123"> <img src={redditIcon} alt="reddit"></img> </Link> </span> */}
            <span className="svg-right-icons"> <Link to="https://www.facebook.com/danpan123/"> <img src={facebookIcon} alt="facebook"></img> </Link> </span>
            <span className="svg-right-icons"> <Link to="https://www.linkedin.com/in/danielpan-/"> <img src={linkedinIcon} alt="linkedin"></img> </Link> </span>
            <span className="svg-right-icons"> <Link to="https://github.com/denialpan"> <img src={githubIcon} alt="github"></img> </Link> </span>

            <hr class="solid" />
        </div>


    )
}

export default NavigationDesktop