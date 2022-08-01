import React from 'react';
import NavBar from '../../NavBar';

export default function EmployerDashboard(props: {handleLogout: () => void}) {
    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <h1>This is where the Employer dashboard will go</h1>
        </>
    )
}; 