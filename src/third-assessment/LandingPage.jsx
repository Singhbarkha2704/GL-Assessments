import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../redux-store/MoviesSlice';

const LandingPage = () => {
  const dispatch = useDispatch();

  const [isShow, setisShow] = useState(false);
  const email= localStorage.getItem('email');
  const password = localStorage.getItem('password');
  if(email==='admin@gmail.com' && password==='admin' )
        {
          setisShow(true);
        }
       
  const data = useSelector(state=>state.movie.data)
  return (
    <div>
      <Helmet>Movies Page</Helmet>
      <h1>Movies List</h1>
      {console.log(data)}
      
      <div className='ms-3 me-3'>
            <div className='products'>
                {data.map(item => (
                    <div className="cards" >  
                        <div className='img-container'>           
                            <img
                                src={item.Images[1]}
                                className="product-image"
                                alt={item.Title}
                            />
                            
                        </div> 
                <div>
                    <h6 className="product-name">{item.Title}</h6> 
                      <span className='product-price me-4'>{item.Language}</span>
                      <span>{item.Genre}</span>
                      <div className='btn btn-success fa fa-eye'></div>

                     {/* condition of remove btn for admin */}
                      {setisShow && (                                        
                        <div><button className='product-add-btn fa fa-trash' onClick={() => dispatch(removeMovie({ id: item.id }))}> Remove Movie</button></div>
                      )                   
                      }
                    
                </div> 
                </div>
                       ))} 
                    </div>
                    </div>
    </div>
  )
}

export default LandingPage
