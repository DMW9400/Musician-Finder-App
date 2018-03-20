import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom'
import UserInput from '../components/UserInput'
import Welcome from '../components/Welcome'
import UsersList from '../components/UsersList'
import Profile from '../components/Profile'
import MessagePage from '../components/MessagePage'
import MyMessages from '../components/MyMessages'
import { dispatchCurrentUser } from '../actions'


class Container extends React.Component{

  componentDidMount(){
    console.log("CONTAINER RESET")
    if (localStorage.length===0){
      this.props.history.push('/login')
    }else{
      console.log("CONTAINER DISPATCH USER")
      this.props.dispatchCurrentUser()
    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/create-user" component={UserInput} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path = "/users/:id" component={Profile} />
          <Route exact path="/users/:id/message" component={MessagePage}/>
          <Route exact path="/my_messages" component={MyMessages}/>

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps,{dispatchCurrentUser})(Container)
