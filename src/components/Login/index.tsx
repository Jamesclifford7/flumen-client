import React from 'react'
import './index.css'

export default function Login(props: {handleLogin: any}) {
    return (
        <div className="login">
            <h1>Flumen</h1>
            <h4>Please enter your login information below</h4>
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
    )
}








