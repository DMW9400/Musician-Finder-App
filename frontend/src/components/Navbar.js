import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

class Navbar extends React.Component {

  logout = () =>{
    localStorage.clear()
      this.props.history.push('/login')
  }
  render(){
    return(
      <header className="nav-wrapper">
        <nav>
          <ul>
            <li><Link to="/base/users">View Users</Link></li>
            <li><Link to="/base/findmusician">Find Musician</Link></li>
            <li><a href="/base/my_messages">My Messages</a></li>
            <button onClick={this.logout}>Logout</button>
          </ul>
        </nav>
      </header>
    )
  }

}
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Navbar)

// Link to not working immediately
{/* <Link to="/base/my_messages">My Messages</Link> */}
