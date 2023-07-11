import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'
import About from '../pages/About'
import Projects from '../pages/Projects'

import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {

    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>

                {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog isAuth={isAuth} />} />
            <Route path="/sohosbohos" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/sohosbohos" element={<Login />} />
                <Route path="/createpost" element={<CreatePost />} />

                {/* 404 page */}
                <Route path='*' element={<h1>404</h1>} />

            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes