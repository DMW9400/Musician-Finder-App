import React from 'react'
import User from './User'
import { connect } from 'react-redux'


class UsersList extends React.Component {

  renderUsers = () => {
    if (this.props.users.length > 0){
      return this.props.users[0].map(user=>{
        return <User key={user.id}
                     user={user}/>
      })
    }
  }

  render(){
    console.log("Users List", this.props)
    return(
      <div>
        <h1>Users List</h1>
        {this.renderUsers()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersList)
