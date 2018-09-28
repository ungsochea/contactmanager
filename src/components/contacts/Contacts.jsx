import React, { Component } from 'react'
import Contact from './Contact'
import { Comsumer } from '../../context'

class Contacts extends Component {

    deleteContact=id=>{
        console.log('hell')
        // const {contacts}=this.state;
        // const newContacts=contacts.filter(contact=>contact.id!==id);
        // this.setState({
        //     contacts:newContacts
        // });
    }

  render() {
      return(
          <Comsumer>
              {value=>{
                   const { contacts } = value
                  return(
                    <React.Fragment>
                        {contacts.map(contact=>(
                            <Contact 
                                key={contact.id}            
                                contact={contact}
                                deleteClickHandler={this.deleteContact.bind(this,contact.id)}
                            />
                    ))}
                    </React.Fragment>     
                  )
              }}
          </Comsumer>
      )    

  }
}

export default Contacts
