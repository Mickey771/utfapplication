import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-wrapper">
                <article>
                    <h2>Company</h2>
                    <Link to='/about'>About us</Link>
                    <p>Contact us</p>
                    <p>Careers</p>
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
                        <img src="/images/Social.svg" alt="social" />
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer