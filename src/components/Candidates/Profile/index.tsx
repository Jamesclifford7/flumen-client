import React from 'react'
import NavBar from '../../NavBar'
import './index.css'
import { UserContext } from '../../../App'
import UserIcon from './user_icon.png'
import {Link} from 'react-router-dom'

export default function CandidateProfile(props: {handleLogout: () => void}) {
    const userDetails = React.useContext(UserContext)
    const user = userDetails.user
    const skills = user.skills.join(", ")   

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='candidate-profile'>
                <div className='back'>
                    <Link to="/candidate-dashboard">Back to Challenges</Link>
                </div>
                <div className='profile-container'>
                    <div className='profile-container-left'>
                        <img src={UserIcon} alt="user profile icon" />
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <p>{skills}</p>
                    </div>
                    <div className='profile-container-right'>
                        <h2>My Submitted Challenges</h2>
                        {
                            user.submittedChallenges.map((challenge: any, idx: number) => {
                                return <div className='candidate-submitted-challenge'>
                                    <h3>{challenge.company}</h3>
                                    <h3>{challenge.role}</h3>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

