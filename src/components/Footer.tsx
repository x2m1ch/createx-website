import logo from '../assets/components/footer/logo.svg'
import facebook from '../assets/components/footer/facebook.svg'
import instagram from '../assets/components/footer/instagram.svg'
import linkedIn from '../assets/components/footer/linked-in.svg'
import telegram from '../assets/components/footer/telegram.svg'
import twitter from '../assets/components/footer/twitter.svg'
import youtube from '../assets/components/footer/youtube.svg'
import phone from '../assets/components/footer/phone.svg'
import mail from '../assets/components/footer/mail.svg'
import heart from '../assets/components/footer/heart.svg'
import line from '../assets/components/footer/line.svg'

import '../styles/components/footer.css'

const Footer = () => {
    return (
        <footer>
            <section className='footer-top'>
                <section className="site-info">
                    <img src={ logo } alt="" />
                    <p>Createx Online School is a leader in online studying. <br /> We have lots of courses and programs from the main <br /> market experts. We provide relevant approaches <br /> to online learning, internships and employment in the <br /> largest companies in the country.</p>
                    <article className='socials'>
                        <img src={ facebook } alt="" />
                        <img src={ twitter } alt="" />
                        <img src={ youtube } alt="" />
                        <img src={ telegram } alt="" />
                        <img src={ instagram } alt="" />
                        <img src={ linkedIn } alt="" />
                    </article>
                </section>

                <section className="site-map">
                    <h6>SITE MAP</h6>
                    <p>About Us</p>
                    <p>Courses</p>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Contacts</p>
                </section>

                <section className="courses">
                    <h6>COURSES</h6>
                    <p>Marketing</p>
                    <p>Management</p>
                    <p>HR & Recruting</p>
                    <p>Design</p>
                    <p>Development</p>
                </section>

                <section className="contact-us">
                    <h6>CONTACT US</h6>
                    <article className='number contacts'>
                        <img src={ phone } alt="" />
                        <p>(405) 555-0128</p>
                    </article>

                    <article className='mail contacts'>
                        <img src={ mail } alt="" />
                        <p>hello@createx.com</p>
                    </article>
                </section>

                <section className="get-to-newsletter">
                    <h6>SIGN UP TO OUR NEWSLETTER</h6>
                    <div className='email'>
                        <input placeholder='Email Address' type="email" />
                        <img src={ line } alt="" />
                    </div>
                    <p className='newsletter'>*Subscribe to our newsletter to receive communications and early <br /> updates from Createx SEO Agency.</p>
                </section>
            </section>

            <section className='footer-bottom'>
                <p className='rights'>© All rights reserved. Made with <img src={ heart } alt="" /> by Createx Studio </p>
                <p>GO TO TOP</p>
            </section>
        </footer>
    )
}

export default Footer