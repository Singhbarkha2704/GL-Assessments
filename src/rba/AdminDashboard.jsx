import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const AdminDashboard = () => {
  const [username,setUsername]=useState('')
   const [uemail, setUemail] = useState('');
    const [upassword, setUpassword] = useState('');
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false)
  
  // const updateHandler = () => {
  //   axios.post('http://localhost:3001/createadmin', {},
  //     { withCredentials: true }).then((Res) => {
  //       console.log(Res);
  //       setIsAdmin(true)

  //     }).catch((e) => console.log(e))     
  // };

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
  
  
  const navigationHandler = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className='container'>
        <form onSubmit={createAdmin}>
          UserName:<input type='text' placeholder='username' onChange={(e) => {setUsername(e.target.value) }}/><br/>
          Email:<input type='email' placeholder='email' onChange={(e) => {setUemail(e.target.value) }}/><br/>
          Password:<input type='password' placeholder='password' onChange={(e) => {setUpassword(e.target.value) }}/><br/>
          <button className='btn btn-warning'>Submit</button>
        </form>
      </div>  
      
      <button className='mt-5' onClick={navigationHandler}>Go Back</button>
    </div>
  )
}

export default AdminDashboard;
