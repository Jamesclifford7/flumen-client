import React, {useState} from 'react'
import NavBar from '../../NavBar/index'
import {submissions} from '../../../STORE/submissions'
import {useHistory, useParams, Link} from 'react-router-dom'
import './index.css'

export default function Submission(props: {handleLogout: () => void}) {
    const history = useHistory()
    const {id} = useParams<{id?: string}>()
    const idNumber = Number(id)
    const submission = submissions.filter((submission) => submission.userId === idNumber)
    const [submissionData, setSubmissionData] = useState(submission[0])
    const submissionId = submission[0].id
    const handleInterview = (event: any) => {
        event.preventDefault(); 
        history.push(`/interview-confirmation/${idNumber}`)
    }

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='submission-container'>
                <div className='back'>
                    <Link to={`/employer-challenge/${submissionId}`}>Back to Challenge</Link>
                </div>
                <h2>Candidate: {submissionData.candidateName}</h2>
                <h2>{submissionData.role} for {submissionData.company}</h2>
                <div className='submission-challenge'>
                    <h3>Answer:</h3>
                    <p>{submissionData.challengeAnswer}</p>
                </div>
                <h3>Overview</h3>
                <div className='professional-questions'>
                    {
                        submissionData.professionalQuestions.map((question, idx) => {
                            return <div>
                                <h4>{question.questionLabel}: </h4>
                                <p>{question.answer}</p>
                            </div>
                        })
                    }
                </div>
                <div className='personal-questions'>
                    {
                        submissionData.personalityQuestions.map((question, idx) => {
                            return <div>
                                <h4>{question.question}</h4>
                                <p>{question.answer}</p>
                            </div>
                        })
                    }
                </div>
                <h3>Schedule an Interview with {submissionData.candidateName}?</h3>
                <button className='schedule' onClick={event => handleInterview(event)}>Schedule</button>
                <h4>or</h4>
                <button className='decline'>Decline</button>
            </div>
        </>
    )
}

