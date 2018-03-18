import React from 'react'
import { connect } from 'react-redux'
import User from './User'

class Profile extends React.Component {


  findById = () => {
       console.log(this.props)
       let found = this.props.users[0].find((user) => {
        return user.id === parseInt(this.props.match.params.id)
      })
      return found
  }

  render(){
    console.log(this.props.users)
    console.log("User Id:", this.props.match.params.id)
    return(
      <div>
        <h1>USER PROFILE</h1>
        { this.props.users.length > 0 ? <User user={this.findById()} /> : <h1>Loading</h1> }
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

export default connect(mapStateToProps)(Profile)
