import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/index'
import {UserContext} from '../../App'
import {challenges} from '../../STORE/challenges'


export default function Dashboard(props: {user: any}) {
    const {email} = props.user
    
    return (
        <>
            <NavBar />
            <div className="dashboard">
                <h2>Welcome back, {email}!</h2>
                <h4>Open Challenges:</h4>
                <div className="challenges-container">
                    {
                        challenges.map((challenge, idx) => {
                            return <div className="challenge" key={idx}> 
                            <div className='challenge-info'>
                                <Link to={`/challenge/${challenge.id}`}><h2>Amazon</h2></Link>
                                <h4>{challenge.role}</h4>
                                <h5>{challenge.location}</h5>
                                <h5>Est. completion time: 6hrs</h5>
                            </div>
                            <div className='challenge-match'>
                                <h3>{challenge.match}/10 Match</h3>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

