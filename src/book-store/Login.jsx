import React  from 'react'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {useAuth} from './Context'
import './Login.css'

const Login = () => {
   
   const auth = useAuth()
   const navigate = useNavigate()

   const handleLogin = () =>{
      // auth.login(auth.user)
   //  if(auth.user==='admin' && auth.password==='admin'){
   //    auth.setLogin(true)
   //    console.log(auth.loginValue);
      navigate('/dashboard')
   //  }
   }
            
   const navigationHandle=()=>{
    navigate('/signup')
   }

  return (
    <div>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br/> Login Page</h2>
            <p>Login from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" onBlur={(e)=>{auth.setUser(e.target.value)}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onBlur={(e)=>{auth.setPassword(e.target.value)}}/>
                  </div>
                  <button type="submit" className="btns btns-black" onClick={handleLogin}>Login</button>
                  <button className='btn btn-warning ms-2'  onClick={navigationHandle}>Signup</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Login