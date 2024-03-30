import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assests/logo.png";

const Navbar = () => {

    const handleScroll = () => {
        const ele = document.getElementById("hide-this-div");
        if (document.documentElement.scrollTop >= 100) {
            ele.style.backgroundColor = "RGB(64,144,168)";
        } else {
            ele.style.backgroundColor = "transparent";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="hide-this-div" style={{
            position: "fixed",
            width: "100%",
            marginBottom: "50px"
        }}>
            <nav className="navbar navbar-expand-lg" style={{boxShadow:"none"}}>
                <div className="container-fluid">
                    <img className="navbar-brand" height={70} width={200} src={logo} style={{marginTop:"0"}}/>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ backgroundColor: "white" }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link to="/" className="nav-link active font-color-white nav-text">Home</Link>
                            </li>
                            <li className="nav-item space-right">
                                <Link to="/about" className="nav-link font-color-white nav-text">About Us</Link>
                            </li>
                            <li className="nav-item space-right dropdown">
                                <Link to="/services" className="nav-link dropdown-toggle font-color-white nav-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                                <ul className="dropdown-menu nav-text">
                                    <li><Link to="/si" className="dropdown-item">Solar Installation</Link></li>
                                    <li><Link to="/pi" className="dropdown-item">Pump Installation</Link></li>
                                    <li><Link to="/is" className="dropdown-item">IT Services</Link></li>
                                    <li><Link to="/pnm" className="dropdown-item">Packaging & Maintenance</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item space-right">
                                <Link to="/contact" className="nav-link font-color-white nav-text">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
