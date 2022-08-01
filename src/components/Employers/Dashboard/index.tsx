import React from 'react';
import NavBar from '../../NavBar';
import './index.css'

export default function EmployerDashboard(props: {user: any; handleLogout: () => void}) {
    const {email} = props.user
    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className='dashboard'>
                <h2>Welcome back, {email}!</h2>
                <h4>My Challenges:</h4>
            </div>
        </>
    )
}; 