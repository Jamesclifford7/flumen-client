import React from 'react'
import { UserContext } from '../../App'
import './index.css'

export default function NavBar(props: {handleLogout: (event: any) => void}) {
    const userDetails = React.useContext(UserContext)

    return (
        userDetails.id === null
        ? <nav>
            <h4>Flumen</h4>
            <ul>
                <li>Login</li>
            </ul>
        </nav>
        : <nav>
            <h4>Flumen</h4>
            <ul>
                <li><button onClick={event => props.handleLogout(event)}>Logout</button></li>
            </ul>
        </nav>
    )
}