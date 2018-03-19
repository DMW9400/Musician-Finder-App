import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends React.Component{
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentUser){
      this.props.history.push('/')
    }

  }

  render(){
    return(
      <div>
        <h1>User Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input onChange={this.handleChange} name="username"></input>
          <label>Password: </label>
          <input type="password" onChange={this.handleChange} name="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {loginUser})(Login)
