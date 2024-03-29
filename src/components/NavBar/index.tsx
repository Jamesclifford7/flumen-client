import React, {useState} from 'react'
import { UserContext } from '../../App'
import './index.css'
import {Link} from 'react-router-dom'
import userIcon from './user_icon.png'

export default function NavBar(props: {handleLogout: (event: any) => void}) {
    const userDetails = React.useContext(UserContext)
    const [showingMenu, setShowingMenu] = useState(false)
    
    return (
        userDetails.user.id === null
        ? <nav>
            <h4>Flumen</h4>
            <ul>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        : <nav>
            <h4>Flumen</h4>
            <ul>
                <li>
                    <button className='icon-button' onClick={() => setShowingMenu(!showingMenu)}><img src={userIcon} alt="user profile icon"/></button>
                    <Menu isShowing={showingMenu} handleLogout={props.handleLogout} />
                </li>
            </ul>
        </nav>
    )
}

function Menu(props: {isShowing: boolean; handleLogout: (event: any) => void}) {
    const {isShowing} = props

    if (!isShowing) {
        return null
    }

    return (
        <div className="dropdown-menu">
            <Link to="/candidate-profile">Profile</Link>
            <button onClick={event => props.handleLogout(event)}>Logout</button>
        </div>
    )
}