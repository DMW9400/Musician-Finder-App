import React from 'react'
import { connect } from 'react-redux'

class MessagePage extends React.Component{

  state = {
    body:''
  }

  handleChange = (event) => {
    this.setState({
        body: event.target.value
    },()=>{console.log(this.state)})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:3000/api/v1/messages`, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        sender_id: 1,
        recipient_id: 2,
        message: this.state.body
      })
    }).then(res=>res.json())
    .then(json=>console.log(json))
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <label>Send Message</label>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
        <a href="/users">View Users</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(MessagePage)