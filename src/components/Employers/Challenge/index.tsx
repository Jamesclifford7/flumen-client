import React, {useState} from 'react'
import NavBar from '../../NavBar/index'
import {challenges} from '../../../STORE/challenges'
import {Link, useHistory, useParams} from 'react-router-dom'
import './index.css'
import {submissions} from '../../../STORE/submissions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faWrench, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function EmployerChallenge(props: {handleLogout: () => void}) {
    const history = useHistory()
    const {id} = useParams<{id?: string}>()
    const idNumber = Number(id)
    const challenge = challenges.filter((challenge) => challenge.id === idNumber)
    const [formData, setFormData] = useState(challenge[0])
    const challengeSubmissions = submissions.filter((submission) => submission.id === idNumber)

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="employer-challenge-container">
                <div className='back'>
                    <Link to="/employer-dashboard">Back to Results</Link>
                </div>
                <section className='company-info'>
                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <h2>{formData.company}</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWrench} />
                        <h2>{formData.role}</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h2>{formData.location}</h2>
                    </div>
                </section>
                <section className="challenge-info">
                        <h2>Challenge:</h2>
                        <p>{formData.challengeQuestion}</p>
                </section>
                <section className="submissions">
                    <h2>Submissions: </h2>
                    {
                        challengeSubmissions.map((challengeSubmission, idx) => {
                            return (
                                <div className='submission'>
                                    <Link to={`/submission/${challengeSubmission.userId}`}><h3>{challengeSubmission.candidateName}</h3></Link>
                                    <h5>{challengeSubmission.match}/10 Match</h5>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}