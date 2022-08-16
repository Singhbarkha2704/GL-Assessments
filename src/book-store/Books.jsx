import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import books from './data'

const Books = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([])

  const searchHandle=()=>{
    navigate('/search')
  }
  
   const changeHandler = (event) =>{
            // console.log(event.target.value);
      setSearch(search)
    }

    const clickhandler=(event)=>{
       event.preventDefault();
       const temp = [...books]
            let data = temp.filter(item => item.author === search)
                // console.log(data);
                setResult(data)
                console.log(result);

    }



  return (
    <div>
      <h1>Shopping</h1>
      <button onClick={searchHandle} changeHandler={changeHandler} clickhandler={clickhandler} result={result}>Search</button>
      
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

export default Books