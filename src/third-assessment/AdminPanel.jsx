import React, { useState } from 'react';
import './movies.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux-store/MoviesSlice';

const AdminPanel = () => {
  const dispatch = new useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [source, setSource] = useState('');
  const [language, setLanguage] = useState('');

  const addMovieHandler = () => {
    dispatch(addMovie({ id: Date.now(), Title: title, Genre: genre, Images: source, Language: language }));
    navigate('/landing-page')
  }

  return (
    <div>
      <Helmet><title>Admin</title></Helmet>
      <h1 className='heading'>Admin Panel</h1>
      <div className="row admin-container">
        <div className="col">
          {/* title input */}
          <div className="form-outline">
            <input type="text" id="form8Example1" className="form-control" onBlur={(e)=>{setTitle(e.target.value)}} />
            <label className="form-label" for="form8Example1">Movie Title</label>
          </div>
        </div>
        
      <div className="col">
        <div className="form-outline">
          <input type="email" id="form8Example2" className="form-control" onBlur={(e)=>{setGenre(e.target.value)}}/>
          <label className="form-label" for="form8Example2">Genre</label>
        </div>
      </div>
    </div>

    <div className="row admin-container">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form8Example3" className="form-control" onBlur={(e)=>{setSource(e.target.value)}}/>
          <label className="form-label" for="form8Example3">Image Source</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form8Example4" className="form-control" onBlur={(e)=>{setLanguage(e.target.value)}}/>
          <label className="form-label" for="form8Example4">Language</label>
        </div>
      </div>
      
      <button className='btn btn-success btn-lg fa fa-plus-square'  onClick={addMovieHandler}> Add</button>                

    </div>

    </div>
  )
}

export default AdminPanel
