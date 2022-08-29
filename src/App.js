import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginRBA from './rba/LoginRBA';
import SignupRBA from './rba/SignupRBA';
import NoMatch from './rba/NoMatch';
import Header from './rba/Header';
import AdminDashboard from './rba/AdminDashboard';
import UserDashboard from './rba/UserDashboard';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<LoginRBA />} />
          <Route path='/signup' element={<SignupRBA />} />
          <Route path='settings' element={<AdminDashboard />} />
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
