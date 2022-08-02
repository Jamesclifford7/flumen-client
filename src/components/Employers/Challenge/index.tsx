import React, {useState} from 'react'
import NavBar from '../../NavBar/index'
import {challenges} from '../../../STORE/challenges'
import {Link, useHistory, useParams} from 'react-router-dom'
import './index.css'
import {submissions} from '../../../STORE/submissions'

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
                    <h2>{formData.company}</h2>
                    <h2>{formData.role}</h2>
                    <h2>{formData.location}</h2>
                </section>
                <section className="challenge-info">
                    {/* <div> */}
                        <div className="challenge-description">
                            <h2>Challenge:</h2>
                            <p>{formData.challengeQuestion}</p>
                        {/* </div> */}
                    </div>
                </section>
                <section className="submissions">
                    <h2>Submissions: </h2>
                    {
                        challengeSubmissions.map((challengeSubmission, idx) => {
                            return (
                                <div>
                                    <h3>{challengeSubmission.candidateName}</h3>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}