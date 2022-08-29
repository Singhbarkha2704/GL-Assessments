import React from 'react'

const UserDashboard = () => {
  const username = localStorage.getItem('username')
  // const role = localStorage.getItem('role')
  const email = localStorage.getItem('email')
  return (
    <div style={{ background: 'linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))' }}>
      
      <h1>User Dashboard</h1>
      {/* --------------Profile Card--------------- */}
      <div className="card h-100" style={{ width: '18rem', marginLeft:'40%' , border:'2px solid teal'}}>
        <div className="card-body ">
          <h4 className='fa fa-user-circle fa-underline fa-bold'> Profile Information</h4>
          <hr/>
          <h5 className="card-title fa fa-user">  UserName: { username}</h5>
          <h6 className="card-subtitle mb-2 text-muted fa fa-envelope">  Email: { email}</h6>   
        </div>
      </div>

      

    </div>
  )
}

export default UserDashboard
