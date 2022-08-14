import React, { Component } from 'react'
import './Ticket.css'
import data from './data'
import ShowTickets from './ShowTickets'
import { Helmet } from 'react-helmet'

export default class TicketRaising extends Component {
    constructor(props){
        super(props)
        this.state={
            data:data,
            summary:'',
            show:false,
            requiredItem:0
        }
    }
    // function for sorting w.r.t. priority
    componentDidMount(){
       const sorteddata=[...this.state.data].sort((a,b)=>Number(a.priority)-Number(b.priority))
      this.setState({data:sorteddata})
    }

    //function for displaying container for input
    replaceModalItem=(itemid)=>{
      this.setState({requiredItem: itemid})
      this.setState({show:!this.state.show})
    }

    changeHandler=(e)=>{
      e.preventDefault()
      this.setState({summary:e.target.value})
    }

    submitHandler=(e)=>{
      e.preventDefault()
      const temp = [...this.state.data]
        console.log(temp);
        const obj = temp.find(item=>item.id===this.state.requiredItem)
        obj.status=!obj.status
        obj.summary=this.state.summary
        this.setState({data:temp})
      
    }
    
  render() {
   
    return (
      <div className='ticket'>
        <Helmet>
          <title>Ticket App</title>
        </Helmet>
        {/*input for summary */}
         {
          this.state.show && <div className='form-container'>
            <label className='label' >Summary</label>
            <input className="form-control me-2" id="focusedInput" type='text' onChange={(e)=>{this.changeHandler(e)}} />
            <button className='btn btn-success ms-2 lg' onClick={(e)=>{this.submitHandler(e)}}>OK</button>
          </div>
        }
        {/*for displaying cards */}
        <ShowTickets data={this.state.data} replaceModalItem={this.replaceModalItem}/>

       
      </div>
    )
  }
}
