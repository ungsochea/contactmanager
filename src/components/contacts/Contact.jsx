import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Comsumer } from '../../context'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Contact extends Component {
    state={
        showContactInfo:false
    };
    onShowClick=()=>{
        this.setState({
            showContactInfo:!this.state.showContactInfo
        })
    }
    onDeleteClick=async (id,dispatch)=>{
        try{

            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type:'DELETE_CONTACT',payload:id})

        }catch(e){
            dispatch({type:'DELETE_CONTACT',payload:id})
        }
        
    }

  render() {
      const {id,name,email,phone}=this.props.contact;
      const {showContactInfo}=this.state;
      return(
           <Comsumer>
          {value=>{
              const {dispatch}=value;
              return(
                <div className="card card-body mb-3">
                <h4>{name}{' '}  
                    <i 
                        onClick={this.onShowClick} 
                        className={showContactInfo?"fas fa-sort-down":"fas fa-caret-right " }           
                    />
                    <i 
                        className="fa fa-times"
                        style={{cursor:'pointer',float:'right',color:'red'}}
                        onClick={this.onDeleteClick.bind(this,id,dispatch)}
                    />  
                    <Link to={`contact/edit/${id}`}>
                        <i className="fas fa-pencil-alt" style={{cursor:'pointer',float:'right',color:'black',marginRight:'1rem'}}></i>
                    </Link>     
                </h4>
                {showContactInfo&&
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                }
               
              </div>
              )
          }}
      </Comsumer> 
      )      
  }  
}

Contact.propTypes={
    contact:PropTypes.object.isRequired,
}

export default Contact