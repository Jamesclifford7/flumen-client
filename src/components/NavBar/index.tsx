import React from 'react'
import { UserContext } from '../../App'
import './index.css'

export default function NavBar() {
    const userDetails = React.useContext(UserContext)

    return (
        userDetails.id === null
        ? <nav>
            <span>Flumen</span>
            <ul>
                <li>Login</li>
            </ul>
        </nav>
        : <nav>
            <span>Flumen</span>
            <ul>
                <li>Logout</li>
            </ul>
        </nav>
    )
}