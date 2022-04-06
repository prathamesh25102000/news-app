import React from "react";
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="container first_class">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <h3>BE THE FIRST TO KNOW</h3>
                            <p>Get all the latest updates on  news , Events. Sign up for our newsletter today.</p>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <form className="newsletter">
                                <input type="text" placeholder="Email Address" />
                                <button className="newsletter_submit_btn" type="submit"><i className="fa fa-paper-plane"></i></button>
                            </form>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="col-md-12"><h3>Stay Connected</h3></div>

                            <div className="col-md-12">
                                <div className="standard_social_links">
                                    <div>
                                        <li className="round-btn btn-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>

                                        </li>
                                        <li className="round-btn btn-linkedin"><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>

                                        </li>
                                        <li className="round-btn btn-twitter"><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>

                                        </li>
                                        <li className="round-btn btn-instagram"><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>

                                        </li>
                                        <li className="round-btn btn-whatsapp"><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>

                                        </li>
                                        <li className="round-btn btn-envelop"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="container-fluid">
                        <div className="copyright">© Copyright 2022 | All Rights Reserved by PRATHAMESH PATIL</div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer

