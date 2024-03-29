import React, {useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../../NavBar/index'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

export default function CandidateConfirmation(props) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="confirmation">
                <h1>Your submission has been received!</h1>
                <FontAwesomeIcon icon={faCheck} />
                <h2>Expect to hear from us within 5 - 10 days.</h2>
                <Link to="/candidate-dashboard">Back to search</Link>
            </div>
        </>
    )
}