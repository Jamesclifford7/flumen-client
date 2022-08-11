import React from 'react'
import { UserContext } from '../../App'
import './index.css'
import {Link} from 'react-router-dom'

export default function NavBar(props: {handleLogout: (event: any) => void}) {
    const userDetails = React.useContext(UserContext)

    return (
        userDetails.id === null
        ? <nav>
            <h4>Flumen</h4>
            <ul>
                <li><Link to="/login">Login</Link></li>
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