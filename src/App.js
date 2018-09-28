import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts'
import AddContacts from './components/contacts/AddContact'
import EditContacts from './components/contacts/EditContact'
import Header from './components/layout/Header'
import { Provider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Test from './components/test/Test'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
           <div className="App">     
            <Header branding="Contact Manager"/>  
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContacts}/>
                <Route exact path="/contact/edit/:id" component={EditContacts}/>
                <Route exact path="/test" component={Test}/>
                <Route exact path="/about/:id" component={About}/>
                <Route component={NotFound}/>
              </Switch>              
            </div>              
          </div>
        </Router>     
      </Provider>
    );
  }
}

export default App;