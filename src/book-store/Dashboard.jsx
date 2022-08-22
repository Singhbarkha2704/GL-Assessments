import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import books from './data.js'

const Dashboard = () => {
  // const [result, setResult] = useState([prodDetails]);
  const navigate = useNavigate()
  // const [wish,setWish]=useState()

  const shopHandle=()=>{
    navigate('/books')
  }
  return (
    <div>
        <h1>Profile</h1>
        <div className='card box'>
          <div className='card-body'>
              <div>Username: admin</div>
              <div>Phone: 6867668686</div>
              <div>delivery address: knp</div>
              <button className='btn btn-outline-success'  onClick={shopHandle}>Shopping</button>
          </div>
         </div>
        <h2>Wish List</h2>
         <div className='container' >
           <div className='products'>
                       {books.map(item => (
                        <div className="cards" >
                          <h5 className="product-name">{item.title}</h5> 
                    <h6 className='product-price'> {item.author}</h6>
                    <h6 className='product-price'> {item.pages}</h6>
                       
                <div>
                    
                    <div><button className='product-add-btn'>Add to Cart</button></div>
                </div> 
                </div>
                       ))} 
                    </div>
          </div>
        </div>  
  
  )
}

export default Dashboard