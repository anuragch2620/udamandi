import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../Assests/logo.png";

const Footer = () => {
    return <div style={{
        left: 0,
        bottom: 0,
        width: "100%",
        margin: 0,
        paddng: 0
    }}>
        <div className="container-fluid" style={{
            padding: 0
        }}>
            <footer
                className="text-center text-lg-start text-white"
                style={{
                    backgroundColor: "RGB(64,144,168)"
                }}
            >
                <div className="container pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <img class="navbar-brand" height={70} width={200} src={logo} style={{marginTop:"0"}}/>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                <p>
                                    <a className="text-white">Solar Installation</a>
                                </p>
                                <p>
                                    <a className="text-white">Plant Installation</a>
                                </p>
                                <p>
                                    <a className="text-white">Packageing and maintence</a>
                                </p>
                                <p>
                                    <a className="text-white">IT Services</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                    <a className="text-white">Term & Condition</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                                <p>
                                    <a href='/about' className="text-white">About Us</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Okhala, DL 10012, India</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@udamandi.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2020 Copyright:
                                    <a className="text-white" href="https://mdbootstrap.com/"
                                    >udamandi.com</a
                                    >
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faFacebook} /></a>
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    role="button"
                                >
                                <FontAwesomeIcon icon={faLinkedin} />
                                <i className="fab fa-twitter"></i
                                ></a>
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faInstagram} /></a>
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faWhatsapp} /></a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    </div>
}

export default Footer;
