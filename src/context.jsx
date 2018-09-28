import React,{Component} from 'react'
import asiox from 'axios'

const context =React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return{
            ...state,
            contacts:state.contacts.filter(contact=>contact.id!==action.payload)
        };
        case 'ADD_CONTACT':
        return{
            ...state,
            contacts:[action.payload,
            ...state.contacts]
        };
        case 'UPDATE_CONTACT':
        return{
            ...state,
            contacts:state.contacts.map(contact=>contact.id===action.payload.id?(contact=action.payload):contact)
        };
        default:
            return state;
    }
}

export class Provider extends Component{
    state={
        contacts:[],
        dispatch:action=>this.setState(state=>
            reducer(state,action))
    }
    componentDidUpdate(){
        console.log('componentDidupdate...')
    }
    async componentDidMount(){
        const res=await asiox
        .get('https://jsonplaceholder.typicode.com/users');
        
        this.setState({contacts:res.data});
    }
    render(){
        return(
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export const Comsumer=context.Consumer;

