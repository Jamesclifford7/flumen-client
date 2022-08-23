import React, {useState} from 'react'
import './App.css';
import { Route, withRouter, useHistory } from 'react-router-dom'
import Login from './components/Login/index'
import CandidateDashboard from './components/Candidates/Dashboard/index'
import CandidateChallenge from './components/Candidates/Challenge/index'
import CandidateConfirmation from './components/Candidates/ConfirmationPage/index'
import Landing from './components/LandingPage/index'
import EmployerDashboard from './components/Employers/Dashboard'
import EmployerChallenge from './components/Employers/Challenge'
import Submission from './components/Employers/Submission'
import InterviewConfirmation from './components/Employers/Confirmation'

export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) ? JSON.parse(window.localStorage.getItem('user')) : {id: null, email: '', password: '', account: '', submittedChallenges: []})
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value
    const password = event.target.password.value
    

    if (email === "alanturing@gmail.com" && password === "password") {
      setUser({
        id: 1, 
        email: email, 
        password: password, 
        account: 'candidate', 
        submittedChallenges: []
      }); 
      window.localStorage.setItem('user', JSON.stringify({id: 1, email: email, password: password, account: 'candidate', submittedChallenges: []}));
      history.push('/candidate-dashboard'); 
    } else if (email === "stevejobs@gmail.com" && password === "password") {
      setUser({
        id: 2, 
        email: email, 
        password: password, 
        account: 'employer'
      }); 
      history.push('/employer-dashboard'); 
    }
    else {
      console.log('user not found'); 
    }
    
  }

  const handleLogout = (event) => {
    event.preventDefault(); 
    setUser({
      id: null, 
      email: '', 
      password: '', 
      account: '', 
      
    }); 
    window.localStorage.clear(); 
    history.push('/')
  }


  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Route 
          exact path="/"
          render={(props) => (
            <Landing
              {...props}
            />
          )}
        />
        <Route 
          path="/login"
          render={(props) => (
            <Login
              handleLogin={handleLogin}
              {...props}
            />
          )}
        />
        <Route 
          path="/candidate-dashboard"
          render={(props) => (
            <CandidateDashboard 
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
        <Route 
          path="/challenge/:id"
          render={(props) => (
            <CandidateChallenge 
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
        <Route 
          path="/confirmation"
          render={(props) => (
            <CandidateConfirmation
              handleLogout={handleLogout}
              user={user}
              {...props}
            />
          )}
        />
        <Route 
          path="/employer-dashboard"
          render={(props) => (
            <EmployerDashboard 
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
        <Route 
          path="/employer-challenge/:id"
          render={(props) => (
            <EmployerChallenge
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
        <Route 
          path="/submission/:id"
          render={(props) => (
            <Submission
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
        <Route 
          path="/interview-confirmation/:id"
          render={(props) => (
            <InterviewConfirmation
              user={user}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
      </UserContext.Provider>
    </div>
  )
}

export default withRouter(App);
