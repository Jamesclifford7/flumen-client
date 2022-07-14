import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/index'

export default function Dashboard(props: {user: any}) {
    const {email} = props.user

    return (
        <>
            <NavBar />
            <div className="dashboard">
                <h2>Welcome back, {email}!</h2>
                <h4>Open Challenges:</h4>
                <div className="challenges-container">
                    <div className="challenge"> 
                        <div className='challenge-info'>
                            <Link to="/Challenge"><h2>Amazon</h2></Link>
                            <h4>React Developer</h4>
                            <h5>Remote</h5>
                            <h5>Est. completion time: 6hrs</h5>
                        </div>
                        <div className='challenge-match'>
                            <h3>7/10 Match</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// 1. company name
// 2. job title
// 3. location
// 4. estimated time to complete challenge
// 5. quality of match