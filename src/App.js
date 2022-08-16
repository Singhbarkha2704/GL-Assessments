import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './book-store/Dashboard';
// import TicketRaising from './components/ticket raising app/TicketRaising';
import Home from './book-store/Home'
import Login from './book-store/Login';
import Signup from './book-store/Signup'
import Header from './book-store/Header'
import Books from './book-store/Books'
import Search from './book-store/Search'


function App() {
  return (
    <div className="App">
      {/* <TicketRaising/> */}
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/search' element={<Search/>}/>


      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
