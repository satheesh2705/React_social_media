import { useContext,useState } from 'react';
import "./login.css"
import DataContext from './context/DataContext';
const Login = () => {
    const {userName, setUserName, password, setPassword, handleLogin} = useContext(DataContext)
    return (
        <div className="box">
  
      <form action="login" className='loginPage' onSubmit={handleLogin}>
       <label htmlFor="username">Username:</label>
       <input 
       type="text" 
       id="username"
       value={userName}
       onChange={e => setUserName(e.target.value)}
       required
        />
       <label htmlFor="password">Password:</label>
  
       <input 
       type="password" 
       id="password"
       value={password}
       onChange={e => setPassword(e.target.value)}
       required
       
        />
        <label htmlFor="forgrt">Forget Password</label>
       <button type="submit">Login</button>
       
     </form>
  
        </div>
    )
}

export default Login
