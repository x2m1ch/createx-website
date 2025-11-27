import Header from '../components/Header'
import Footer from '../components/Footer'

import heroImage from '../assets/pages/main/illustration.png'
import ellipse from '../assets/pages/main/ellipse.svg'

import '../styles/pages/main/hero.css'

const Main = () => {
    return (
        <>
            <main>
                <section className='hero'>
                    <Header />

                    <article className='hero-body'>
                        <section className='hero-column-one'>
                            <h2 className='hero-one-body'>Enjoy studying <br /> with Createx <br /> Online Courses</h2>
                            <article className='column-buttons'>
                                <button className='hero-about-button'>About Us</button>
                                <button className='hero-courses-button'>Explore courses</button>
                            </article>
                        </section>

                        <section className='hero-column-two'>
                            <img src={ heroImage } alt="" />
                        </section>
                    </article>

                    <article className='statistic'>
                        <div className='students-stat statistic-items'>
                            <h3 className='statistic-header'>1200</h3>
                            <p className='statistic-body'>Students graduated</p>    
                        </div>

                        <img src={ ellipse } alt="" />

                        <div className='courses-stat statistic-items'>
                            <h3 className='statistic-header'>84</h3>
                            <p className='statistic-body'>Completed courses</p>
                        </div>

                        <img src={ ellipse } alt="" />

                        <div className='tutors-stat statistic-items'>
                            <h3 className='statistic-header'>16</h3>
                            <p className='statistic-body'>Qualified tutors</p>
                        </div>

                        <img src={ ellipse } alt="" />

                        <div className='years-stat statistic-items'>
                            <h3 className='statistic-header'>5</h3>
                            <p className='statistic-body'>Years of experience</p>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />       
        </>
    )
}

export default Main