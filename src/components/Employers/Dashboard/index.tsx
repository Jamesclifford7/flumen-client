import React from 'react';
import NavBar from '../../NavBar';
import './index.css'
import {challenges} from '../../../STORE/challenges'
import {Link} from 'react-router-dom'

export default function EmployerDashboard(props: {user: any; handleLogout: () => void}) {
    const {email} = props.user

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='employer-dashboard'>
                <h2>Welcome back, {email}!</h2>
                <h3>My Roles:</h3>
                <div className='challenges-container'>
                    {
                        challenges.map((challenge, idx) => {
                            return <div className='challenge'>
                                <Link to={`/employer-challenge/${challenge.id}`}>
                                    <div>
                                        <h4>{challenge.role}</h4>
                                        <h4>-</h4>
                                        <h4>{challenge.company}</h4>
                                    </div>
                                    <span>Submissions: {challenge.numOfSubmissions}</span>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}; 