import React from 'react'
import NavBar from '../../NavBar'
import './index.css'

export default function CandidateProfile(props: {handleLogout: () => void}) {

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='candidate-profile'>
            </div>
        </>
    )
}

