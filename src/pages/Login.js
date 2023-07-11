import React from 'react'
import { auth, provider } from '../firebaseconfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {

    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        localStorage.setItem("isAuth", true);
        console.log(result);
        setIsAuth(true);
        navigate('/')
    }

    return (
        <div className="loginPage">

            <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign in with Google </button>

        </div>
    )
}

export default Login