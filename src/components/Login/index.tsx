import React from 'react'
import NavBar from '../NavBar/index'
import './index.css'

export default function Login(props: {handleLogin: any}) {
    return (
        <>
            <NavBar />
            <div className="login">
                <h2>Please enter your login information below</h2>
                <form onSubmit={e => props.handleLogin(e)}>
                    <div className='input-container'>
                        <div className="input">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}








