import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import './Blog.scss'


function Blog() {

    return (
        <div className='blog-container'>
            <div className='mobile-menu'>

                <Navigation />

            </div>

            <div className='desktop-menu'>



                <span><Link to="/">Home</Link></span>
                <span><Link to="/about">About</Link></span>
                <span><Link to="/projects">Projects</Link></span>
                <span><Link to="/blog">Blog</Link></span>


                <hr class="solid" />

            </div>

            <h1>under construction</h1>
        </div>
    )
}

export default Blog