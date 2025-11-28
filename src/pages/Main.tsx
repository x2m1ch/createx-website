import Header from '../components/Header'
import Footer from '../components/Footer'

import heroImage from '../assets/pages/main/hero/illustration.png'
import ellipse from '../assets/pages/main/hero/ellipse.svg'

import women from '../assets/pages/main/about/women.png'
import check from '../assets/pages/main/about/check.svg'

import '../styles/pages/main/hero.css'
import '../styles/pages/main/about.css'

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

                <section className='about'>
                    <article className='about-column-one'>
                        <img src={ women } alt="" />
                    </article>

                    <article className='about-column-two'>
                        <section className='about-heading'>
                            <h6 style={{ fontWeight: 'bold' }}>WHO WE ARE</h6>
                            <h2 style={{ fontSize: '46px', fontWeight: '900' }}>Why Createx?</h2>
                        </section>

                        <section className='bulleted-list'>
                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>A fermentum in morbi pretium aliquam adipiscing <br /> donec tempus.</p>
                            </div>

                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>Vulputate placerat amet pulvinar lorem nisl.</p>
                            </div>

                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>Consequat feugiat habitant gravida quisque elit <br /> bibendum id adipiscing sed.</p>
                            </div>

                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                            </div>

                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>Tincidunt sagittis neque sem ac eget.</p>
                            </div>

                            <div className='bulleted-list-items'>
                                <img src={ check } alt="" />
                                <p className='bulleted-items-body'>Ultricies amet justo et eget quisque purus <br /> vulputate dapibus tortor.</p>
                            </div>
                        </section>

                        <button className='more-about-button'>More about us</button>
                    </article>   
                </section>
            </main>

            <Footer />       
        </>
    )
}

export default Main