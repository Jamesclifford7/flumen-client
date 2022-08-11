import React, {useLayoutEffect} from 'react'
import NavBar from '../../NavBar'
import {submissions} from '../../../STORE/submissions'
import {useParams} from 'react-router-dom'
import './index.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

export default function InterviewConfirmation(props: {handleLogout: () => void}) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const {id} = useParams<{id?: string}>()
    const idNumber = Number(id)
    const submission = submissions.filter((submission) => submission.userId === idNumber)
    const candidate = submission[0].candidateName
    
    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='interview-confirmation'>
                <h1>Your interview is confirmed!</h1>
                <FontAwesomeIcon icon={faCheck} />
                <h2>With {candidate} on September 1st at 11am PST</h2>
                <Link to="/employer-dashboard">Back to Dashboard</Link>
            </div>
        </>
    )
}