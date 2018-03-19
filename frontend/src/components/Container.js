import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import UserInput from '../components/UserInput'
import Welcome from '../components/Welcome'
import UsersList from '../components/UsersList'
import Profile from '../components/Profile'
import MessagePage from '../components/MessagePage'


class Container extends React.Component{

  componentDidMount(){
    //fetch current User and put in the store IF there is a localStorage token. IF NOT...send to login
  }

  render(){
    console.log('container render', this.props)
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/create-user" component={UserInput} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path = "/users/:id" component={Profile} />
          <Route exact path="/users/:id/message" component={MessagePage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Container)
