import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/index'
import { UserContext } from '../../../App'

export default function CandidateDashboard(props: {user: any, handleLogout: () => void}) {
    const {email} = props.user
    const userDetails = React.useContext(UserContext)
    const challenges = userDetails.candidateChallenges

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="dashboard">
                <h2>Welcome back, {email}!</h2>
                <h4>Open Challenges:</h4>
                <div className="challenges-container">
                    {
                        challenges.map((challenge: any, idx: number) => {
                            return <div className="challenge" key={idx}> 
                            <div className='challenge-info'>
                                <h2>{challenge.company}</h2>
                                <h4>{challenge.role}</h4>
                                <h5>{challenge.location}</h5>
                                <h5>Est. completion time: {challenge.estimatedCompletionTime}hrs</h5>
                            </div>
                            <div className='challenge-match'>
                                <h3>{challenge.match}/10 Match</h3>
                                <Link to={`/challenge/${challenge.id}`}>I'm interested</Link>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

