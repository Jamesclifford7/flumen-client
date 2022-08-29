import React from 'react'
import NavBar from '../NavBar'
import meetingImage from './images/business-meeting-stock-image.webp'
import lightBulb from './images/lightbulb.jpeg'
import {Link} from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'


export default function Landing(props: {handleLogout: () => void}) {
    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="landing">
                <section id="landing-image">
                    <h1>A skills-based hiring platform for both candidates and HR teams.</h1>
                </section>
                <section id="landing-box-top">
                    <div>
                        <h2>Welcome to Flumen!</h2>
                        <p>We believe that the hiring process is burdened with too many obstacles, and Flumen employs an unorthodox approach to help developers, UX designers, copywriters, and companies better vet each other. Think of Flumen as a dating app for the skills-based economy: complete technical challenges to get the conversation started with your next employer.</p>
                    </div>
                    <div>
                        <img src={meetingImage} alt="developer at work"/>

                    </div>
                </section>
                <section id="landing-box-middle">
                    <h2>How it Works</h2>
                    <div className="how-it-works">
                        <div>
                            <h4>Find Companies</h4>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <p>Explore open positions based on your skills, experience, and interests.</p>
                        </div>
                        <div>
                            <h4>Complete Challenges</h4>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>Complete technical challenges that resemble work you would actually be doing on a daily basis for your employer.</p>
                        </div>
                        <div>
                            <h4>Get Hired</h4>
                            <FontAwesomeIcon icon={faHandshakeSimple} />
                            <p>Companies will contact you based on how well you complete their challenge.</p>
                        </div>
                    </div>
                </section>
                <section id="landing-box-bottom">
                    <div className="philosophy">
                        <h2>Our Philosophy</h2>
                        <img src={lightBulb} alt="light bulb cartoon"/>
                        <p>For both candidates and employers, the hiring process is inefficient and broken. Candidates are faced with misleading job postings and too many unnecessary screenings, where recruiters and companies experience diminished productivity due to drawn-out HR measures and miss out on great candidates due to resume scanners. We believe we can help candidates and companies by putting the technical skill first; candidates win because they get to bypass useless job postings and get a sense of what their actual day-to-day tasks would look like, and companies win because they get immediate confirmation that candidates can fulfill their job responsibilites. If a company likes the results of a user's technical challenge, then there's a match!</p>
                    </div>
                    <div className="signup">
                        <h2>Ready to Rock and Roll?</h2>
                        <button>Sign Up</button>
                        <h4>Already have an account?</h4>
                        <button><Link to="/login">Login</Link></button>
                    </div>
                </section>
                {/* <footer></footer> */}
            </div>
        </>
    )
}