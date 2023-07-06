import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebaseconfig'

function App() {

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login"
        })
    }

    return (
        
        <Router> 

            <nav>

                <Link to ="/portfolio"> Home </Link>
                <Link to ="/blog"> Blog </Link>

                {!isAuth ? (
                <Link to="/login"> Login </Link>
                ) : (
                <>
                    <Link to="/createpost"> Create Post </Link>
                    <button onClick={signUserOut}> Log Out</button>
                </>
                )}

            </nav>

            <Routes>
                
                <Route path="/portfolio" element={<Home />} />
                <Route path="/blog" element={<Blog isAuth={isAuth}/>} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
                <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />

                {/* 404 page */}
                <Route path='*'  element={<h1>404</h1>} />
            
            </Routes>
        </Router>

    );
}

export default App;
