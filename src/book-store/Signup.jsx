import React from 'react'
import Helmet from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './Context'

const Signup = () => {
   const auth = useAuth()
    const navigate = useNavigate()

    const navigationHandle=()=>{
        navigate('/login')
    }
    const handleSignup=()=>{
        navigate('/login')
    }
    
  return (
    <div>
         <Helmet>
            <title>Signup</title>
        </Helmet>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br/> SignUp Page</h2>
            <p>Signup from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" onChange={(e)=>{auth.setUser(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" className="form-control" placeholder="email" onChange={(e)=>{auth.setUser(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Phone</label>
                     <input type="text" className="form-control" placeholder="Phone" onChange={(e)=>{auth.setUser(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{auth.setPassword(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>auth.setPassword(e.target.value)}/>
                  </div>
                  <button type="submit" className="btns btns-black" onClick={handleSignup}>Signup</button>
                  <button onClick={navigationHandle} >Login</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Signup