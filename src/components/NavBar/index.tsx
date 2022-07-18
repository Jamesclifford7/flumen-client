import React from 'react'
import { UserContext } from '../../App'
import './index.css'

export default function NavBar() {
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
                <li>Logout</li>
            </ul>
        </nav>
    )
}