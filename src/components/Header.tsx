import { Link } from "react-router-dom"

import logo from '../assets/components/header/logo.svg'
import account from '../assets/components/header/account.svg'

import '../styles/components/header.css'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={ logo } alt=""></img>
            </Link>

            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </nav>

            <section className="account">
                <button className="consultation-button">Get consultation</button>

                <section className="get-account">
                    <img src={ account } alt="" />

                    <p style={{ color: '#424551' }}>Log in / Register</p>
                </section>
            </section>
        </header>
    )
}

export default Header