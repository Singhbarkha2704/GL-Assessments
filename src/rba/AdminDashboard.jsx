import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const AdminDashboard = () => {
  const [username,setUsername]=useState('')
   const [uemail, setUemail] = useState('');
    const [upassword, setUpassword] = useState('');
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false)  

  const createAdmin = (e) => { 
    e.preventDefault()
    axios.post(`http://localhost:3001/createadmin`, {
      username: username,
      email: uemail,
      password:upassword
    }, { withCredentials: true })
      .then(res => console.log(res))
    .catch((err)=>console.log(err))
  };
  
  
  
  return (
    <div>
      <h1 style={{color:'teal', fontWeight:'800', fontSize:'50px', margin:'10px', textAlign:'center'}}>Admin Dashboard</h1>
      <div className='container' >
        <form className='ms-5' onSubmit={createAdmin}>
          <div className='mb-2'>
            <label className='fa fa-user'  htmlFor="uname">  Username</label>
            <input className='form-control' type='text' placeholder='username' onChange={(e) => {setUsername(e.target.value) }}/>
          </div>
          
          <div className='mb-2'>
            <label className='fa fa-envelope'  htmlFor="uemail">  Email</label>
            <input className='form-control'  type='email' placeholder='email' onChange={(e) => {setUemail(e.target.value) }}/>
          </div>

          <div className='mb-2'>
            <label className='fa fa-key' htmlFor="password">  Password</label>
            <input className='form-control' type='password' placeholder='password' onChange={(e) => {setUpassword(e.target.value) }}/>
          </div>

          <button className='btn btn-warning mb-3'>Submit</button>
        </form>

      </div>
      <hr/>
      <div className='ms-5'>
        <Link to='/users-crud'><button className='btn btn-info ms-5 me-4 fa fa-upload'>  Update Users?</button></Link>
      </div> 
    </div>
  )
}

export default AdminDashboard;
