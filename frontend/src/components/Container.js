import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import UsersList from '../components/UsersList'
import Profile from '../components/Profile'
import MessagePage from '../components/MessagePage'
import MyMessages from '../components/MyMessages'
import { dispatchCurrentUser } from '../actions'


class Container extends React.Component{

  componentDidMount(){
    if (localStorage.length===0){
      this.props.history.push('/login')
    }else{
      this.props.dispatchCurrentUser()
    }
  }

  // Route is what gives a component history in its props

  render(){
    return(
      <div>
        <Route path="/" component={Navbar}></Route>
        <Switch>
          <Route exact path="/base" component={Welcome} />
          <Route exact path="/base/users" component={UsersList} />
          <Route exact path="/base/users/:id" component={Profile} />
          <Route exact path="/base/users/:id/message" component={MessagePage}/>
          <Route exact path="/base/my_messages" component={MyMessages}/>

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps,{dispatchCurrentUser})(Container)
