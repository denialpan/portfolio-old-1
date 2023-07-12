import Hamburger from "./Hamburger"
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Navigation() {

    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <div>
            <div className="navigation" >

                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburger}/>
                </div>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>

                </ul>
                
                

            </div>

            <style jsx> {`
            
                .navigation {
                    
                    width: 100%;
                    height: 50px;
                    margin: 0px;
                    padding-left: 30px;
                         
                }

                .navigation ul {
                    display: ${hamburger ? 'block' : 'none'};
                    float: left;
                    margin: 0;
                    padding-top: 20px;
                    padding-left: 0px;
                    white-space: nowrap;
                    position: relative;
                    width: 100%;
                    z-index: 100;
                    height: 150px;
                    animation: expandMenu 0.7s ease;
                }

                .navigation ul li {
                    padding-right: 10px;
                    padding-bottom: 10px;
                    list-style-type: none;
                }

                @keyframes expandMenu {
                    from {
                        height: 0px;
                    } to {
                        height: 150px;
                    }
                }

            `}


            </style></div>



    )
}