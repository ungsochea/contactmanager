import React, { Component } from 'react'

class Test extends Component {

    state={
        title:'asdf',
        body:'dsfadf'
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data =>
            this.setState({
                title:data.title,
                body:data.body
            })
            )
        
    }
    // componentWillMount(){
    //     console.log('componentWillmount...')
    // }
    // componentDidUpdate(){
    //     console.log('componentDidupdate...')
    // }
  render() {
      const {title,body}=this.state;
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test
