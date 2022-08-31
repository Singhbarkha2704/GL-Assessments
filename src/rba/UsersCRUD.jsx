import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const UsersCRUD = () => {
  const navigate = useNavigate();
    const [results, setResults] = useState([]); //P.T.R.it must be an arr type
    const [vusername, setVusername] = useState('');
    const [vemail, setVemail] = useState('');
    const [vid, setVid] = useState(-1);

    const [uname, setUname] = useState('');
    const [uemail,setUemail]=useState('')

    const loadUsers = async () => {
        return await axios.get(`http://localhost:3001/getusers`)
        .then(res => {
            console.log(res.data);
            setResults(res.data)
        }).catch(err=>console.log(err))
     };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = (e,uid) => { 
        e.preventDefault();
        axios.delete(`http://localhost:3001/users/delete/${uid}`)
            .then(res => {
                console.log(res)
                const filteredData = results.filter(user => user.id !== uid);
                console.log(filteredData);
                setResults(filteredData)
            })
            .catch(err => console.log(err))           
    };


    const setUpdateMsg = (e, uid) => {
        axios.get(`http://localhost:3001/getusers/${uid}`)
            .then(res => {
                console.log(`res`, res);
                setVusername(res.data.username);
                setVemail(res.data.email)
            } )
            .catch(err => console.log(`err`, err))
        
        setVid(uid);
    };
    
    const updateHandler = (e) => {
        // e.preventDefault();
        axios.put(`http://localhost:3001/updateusers/${vid}`,{
            username:vusername,
            email:vemail,
        }).then(res => {
            console.log(res);
        }
        ).catch(err => console.log(err))

        setVid(-1)
    }

    const navigationHandler = () => {
    navigate(-1)
  }
  return (
      <div>
          {console.log(results)}
          
          {/* EDIT FORM */}
        <div>
            <form className='ms-5 dark'>
                    <h2 className='form-heading'>Edit Form</h2>

                    <div className='row mb-3'>
                    <label className='fa fa-user mb-2'> Username</label>
                    <div className="col-sm-5">
                        <input className='form-control'  type='text' value={vusername} onChange={(e)=>{setVusername(e.target.value)}} ></input>
                    </div>
                </div>

                <div class='row mb-3'>
                    <label className='fa fa-envelope mb-1'> Email</label>
                    <div className="col-sm-5">
                        <input className='form-control' type='text' value={vemail} onChange={(e)=>{setVemail(e.target.value)}}></input>
                    </div>
                </div>

                  <button className=' btn btn-primary mt-2 mb-4' onClick={updateHandler} >Update</button>
                 </form>  
        </div>

          {/* TABLE */}
          
        <table className='table table-hover table-info  me-5'>
            <thead>
              <tr >
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item,key) => 
                <tr key={item.id}>
                  <td >{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className='btn btn-danger fa fa-trash me-1' onClick={(e) => handleDelete(e, item.id)}></button>
                    <button className='btn btn-warning fa fa-pencil-square-o' onClick={(e)=>setUpdateMsg(e,item.id)}></button>
                  </td>    
                </tr>
              )               
              }                
            </tbody>
      </table> 
      
        <button className='btn btn-primary fa fa-arrow-circle-left' onClick={navigationHandler}>  Go Back</button>

    </div>
  )
}

export default UsersCRUD
