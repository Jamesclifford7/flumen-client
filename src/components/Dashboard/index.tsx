import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/index'
import {challenges} from '../../STORE/challenges'


export default function Dashboard(props: {user: any, handleLogout: () => void}) {
    const {email} = props.user
    
    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="dashboard">
                <h2>Welcome back, {email}!</h2>
                <h4>Open Challenges:</h4>
                <div className="challenges-container">
                    {
                        challenges.map((challenge, idx) => {
                            return <div className="challenge" key={idx}> 
                            <div className='challenge-info'>
                                {/* <Link to={`/challenge/${challenge.id}`}><h2>{challenge.company}</h2></Link> */}
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

