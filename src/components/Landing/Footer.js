import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-wrapper">
                <article>
                    <h2>Company</h2>
                    <Link to='/about'>About us</Link>
                    <a href='#section-eight'> <p>Contact us</p></a>
                    <a href='#section-eight'> <p>Careers</p></a>
                    <p>Press</p>
                </article>
                <article>
                    <h2>Product</h2>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>News</p>
                    <p>Help desk</p>
                    <p>Support</p>
                </article>
                <article>
                    <h2>Services</h2>
                    <p>Copy Trading</p>
                    <Link to={'/trading-signals'}> <p>Trading Signals</p></Link>
                    <Link to={'/risk-and-rewards'}> <p>Risk & Rewards</p></Link>
                </article>
                <article>
                    <h2>Legal</h2>
                    <Link to={'/privacy-policy'}><p>Privacy Policy</p></Link>
                    <Link to={'/terms-and-conditions'}><p>Terms & Conditions</p></Link>
                </article>
                <article>
                    <h2>Contact Us</h2>
                    <p>support@universalfx.site</p>
                </article>
            </section>
            <section className="social">
                <hr />
                <div className="social-media-wrapper">
                    <p>© 2024 Copyright, All Right Reserved, Universal FX</p>
                    <div className="social-media">
                        {/* <img src="/images/Social.svg" alt="social" /> */}
                        <a target='_blank' href='https://t.me/+FGobMoQg6jowZWVk'><span><FaTelegram /></span></a>
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=61557046146543'><span><MdOutlineFacebook /></span></a>
                        <a target='_blank' href='https://www.instagram.com/universalfxofficial?igsh=MXN1cnI3dXB1ejc3bg=='><span><FaInstagram /></span></a>
                        {/* <span><FaLinkedin /></span> */}
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer