import './App.css';
import { HashRouter as Router } from 'react-router-dom'
// import { useState } from 'react'
import AnimatedRoutes from './components/AnimatedRoutes';
// import { signOut } from 'firebase/auth'
// import { auth } from './firebaseconfig'



function App() {


    // const signUserOut = () => {
    //     signOut(auth).then(() => {
    //         localStorage.clear();
    //         setIsAuth(false);
    //         window.location.hash = "/"
    //     })
    // }
    // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <>
            <div className='backgroundImage'></div>

            <Router>

                <AnimatedRoutes />

            </Router>
        </>
    );
}

export default App;
