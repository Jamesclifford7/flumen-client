import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/index'
import './index.css'

export default function Confirmation() {
    return (
        <>
            <NavBar />
            <div className="confirmation">
                <h1>Your submission has been received!</h1>
                <h2>Expect to hear from us within 5 - 10 days.</h2>
                <Link to="/dashboard">Back to search</Link>
            </div>
        </>
    )
}