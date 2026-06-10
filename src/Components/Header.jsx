import Singup from "./Singup";
import Login from "./Login";
import { Link } from "react-router-dom";

import logo from "../img/logo.jpeg"
let Header = ()=>{
    return(
        <>
        <section>
            <div>
                <nav className="header">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul>
                        <li className="homebtn"><Link to="/Home">Home</Link></li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Our Work</li>
                        
                    </ul>
                    
                        <div className="btn-section">
                            
                    <button className='singupbtn'><Link to="/Login">Login</Link></button>
                    <button className='singupbtn'><Link to="/Singup">Sing Up</Link></button>
                    </div>
                    
                    
                </nav>
            </div>
        </section>
        </>
    )
}

export default Header;