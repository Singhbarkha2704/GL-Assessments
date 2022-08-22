import React, { Component } from 'react'

export default class ShowTickets extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        <h1 className='heading'> Tickets</h1>
        <div className="row">
            {
                this.props.data.map((item, index) =>(
                    <div key={index} className="col-sm-3">
                        <div style={{
                          backgroundColor:
                            item.priority === 1
                              ? "teal"
                              : item.priority === 2
                              ? "#FFA500"
                              : item.priority === 3
                              ? "#7B68EE"
                              : "green"
                        }} className="card mb-4 box">
                        <div className="card-body">
                            <h5 style={{color:'white'}}className="card-title">Timestamp: {item.timestamp}</h5>
                            <p  style={{color:'white'}} className="card-text">Priority: {item.priority}</p>
                            <p  style={{color:'white'}} className="card-text">Description: {item.description}</p>
                            <p style={{color:'white', textDecoration:'underline'}} className='card-text'>{item.summary}</p>
                            <p style={{color:'white'}}  className="card-text">Status: {item.status?'open':'close'}</p>

                            <button className="btn btn-danger ms-2 me-2" onClick={() => this.props.replaceModalItem(item.id)} >{item.status?'close':'open'}</button>                                                       
                        </div>
                        </div>
                    </div>
         )
                )
            }
            </div>
      </div>
    )
  }
}
