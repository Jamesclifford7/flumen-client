import React from 'react'
import TextField from '@mui/material/TextField'
import './index.css'

export default function Home(props: {handleLogin: any}) {
    return (
        <div className="home">
            <h1>Amnis</h1>
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








