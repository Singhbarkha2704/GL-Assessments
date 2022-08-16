import React from 'react'

const Search = (props) => {
  return (
    <div>
      <form className='search-form'>
        <input className='prod-input' type='text' placeholder='Enter Author Name' onChange={(e) =>{props.changeHandler(e)}}></input>
        <button className='search-btn' onClick={(e) =>{props.clickhandler(e)}}>Search</button>
      </form>

      <div className='container' >
           <div className='products'>
                       {props.result.map(item => (
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

export default Search