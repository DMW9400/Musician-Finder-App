import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class MessagePage extends React.Component{

  state = {
    body:''
  }

  handleChange = (event) => {
    this.setState({
        body: event.target.value
    })
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
        sender_id: this.props.currentUser.id,
        recipient_id: this.props.match.params.id,
        message: this.state.body
      })
    }).then(res=>res.json())
  }

  render(){
    return(
      <div>
        <label>Send Message</label>
        {/* <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form> */}
        <label className="field-name"><span className="field-name">Song Embed Three</span>
        <TextField
          name='song_embed_3'
          onChange={this.handleChange}
            placeholder='   Your third song embed link            '
        /></label>
        <a href="/base/users">View Users</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MessagePage)
