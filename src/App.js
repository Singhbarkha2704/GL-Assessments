import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Dashboard from './book-store/Dashboard';
// import TicketRaising from './components/ticket raising app/TicketRaising';
// import Home from './book-store/Home'
// import Login from './book-store/Login';
// import Signup from './book-store/Signup'
// import Header from './book-store/Header'
// import Books from './book-store/Books'
// import Search from './book-store/Search'

/**------Revised Book Store Imports---- */
import Header from './revised-book-store/Header'
import Dashboard from './revised-book-store/Dashboard';
import Signup from './revised-book-store/Signup'
import Login from './revised-book-store/Login'
import Shop from './revised-book-store/Shop'
import NoMatch from './revised-book-store/NoMatch'
import {useState} from 'react'
import LandingPage from './third-assessment/LandingPage';

import { useSelector } from 'react-redux';
import AdminPanel from './third-assessment/AdminPanel';

function App() {
  const [isAdmin, setisAdmin] = useState(false);
  const email= localStorage.getItem('email');
  const password= localStorage.getItem('password');
        if(email==='admin@gmail.com' && password==='admin' )
        {
          setisAdmin(true);
          console.log(isAdmin);
        }  
    const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      {/* <TicketRaising/> */}

    {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/search' element={<Search/>}/>


      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter> */}
      
      {/* Revised Book Store */}
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='dashboard' element={ <Dashboard/>}/>
          <Route path='/shop' element={<Shop/>}/>
         
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter> */}

      {/**third assessment */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
          {isAuth && (<Route path='/landing-page' element={<LandingPage />} />)}
          {isAuth && !isAdmin && (<Route path='/admin-panel' element={<AdminPanel/>}/>)}
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
