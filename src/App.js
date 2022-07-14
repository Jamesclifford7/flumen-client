import React, {useState} from 'react'
import './App.css';
import { Route, withRouter, useHistory } from 'react-router-dom'
import Home from './components/LandingPage/index'
import Dashboard from './components/Dashboard/index'
import Challenge from './components/Challenge/index'
import Confirmation from './components/ConfirmationPage/index'

function App() {
  const [user, setUser] = useState({id: null, email: '', password: ''})
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value
    const password = event.target.password.value
    

    if (email === "alanturing@gmail.com" && password === "password") {
      setUser({
        id: 1, 
        email: email, 
        password: password
      }); 
      history.push('/dashboard'); 
    } else {
      console.log('user not found')
    }
    
  }

  return (
    <div className="App">
      <Route 
        path="/home"
        render={(props) => (
          <Home 
            handleLogin={handleLogin}
            {...props}
          />
        )}
      />
      <Route 
        path="/dashboard"
        render={(props) => (
          <Dashboard 
            user={user}
            {...props}
          />
        )}
      />
      <Route 
        path="/challenge"
        render={(props) => (
          <Challenge 
            user={user}
            {...props}
          />
        )}
      />
      <Route 
        path="/confirmation"
        render={(props) => (
          <Confirmation
            user={user}
            {...props}
          />
        )}
      />
      
    </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super(); 
//     this.state = {
//       user: {}
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Routes>
//           <Route 
//             path="/home" 
//             element={<Home />}
//           />
//         </Routes>
//       </div>
//     )
//   }
// }


export default withRouter(App);