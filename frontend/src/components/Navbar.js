import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import FlatButton from 'material-ui/FlatButton';

class Navbar extends React.Component {

  state = {
    currentUser:null
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      currentUser: nextProps.currentUser
    },()=>console.log("SETTING CURRENT USER:", this.state.currentUser))
  }

  logout = () => {
    localStorage.clear()
      this.props.history.push('/login')
  }


  render(){
    if (!this.state.currentUser){
      return (<div>Loading</div>)
    }else {
      this.state.curentUser ?  console.log('current user: ', this.state.currentUser) : console.log('No user')
      const linkstyle = {textDecoration: 'none', borderBottom: 'blue', color:'#546E7A', margin:'30px'}
      return(
        <header className="nav-wrapper" style={{backgroundColor:'#BDBDBD', margin:'0px',paddingTop: '0px'}} >
          <nav style={{backgroundColor:'#BDBDBD',margin:'0px',paddingTop: '0px'}}>
            <ul>
              <li><Link to={`/base/users/${this.state.currentUser.id}`} style={linkstyle}>View Profile</Link></li>
              <li><Link to="/base/users" style={linkstyle}>View Users</Link></li>
              <li><Link to="/base/findmusician" style={linkstyle}>Find Musician</Link></li>
              <li><a href="/base/my_messages" style={linkstyle}>My Messages</a></li>
              <FlatButton onClick={this.logout} label="Logout" backgroundColor="#90A4AE" />
            </ul>
          </nav>
        </header>
      )
    }
  }

}
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Navbar)

// Link to not working immediately
{/* <Link to="/base/my_messages">My Messages</Link> */}
