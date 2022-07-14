import React from 'react'
import NavBar from '../NavBar'
import developerImage from './images/developer-photo-1.jpeg'
import './index.css'

export default function Landing() {
    return (
        <div className="landing">
            <NavBar />
            <section id="landing-box-top">
                <div>
                    <h2>Welcome to Flumen!</h2>
                    <p>Flumen is a tool to help better connect developers with recruiters and HR departments seeking talent. 
                    We believe that the hiring process is burdened with too many obstacles, and Flumen employs an unorthodox approach to help developers and companies better vet each other. 
                    </p>
                </div>
                <div>
                    <img src={developerImage} alt="developer at work"/>
                </div>
            </section>
            <section id="landing-box-middle"></section>
            <section id="landing-box-bottom"></section>
            <footer></footer>
        </div>
    )
}