import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Welcome} from './Welcome'
import UsersList from './UsersList'

class App extends Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/create-user" component={UserInput} />
          <Route exact path="/users" component={UsersList} />
        </Switch>

      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// const mapDispatchToProps =

export default connect(mapStateToProps, {fetchUsers})(App);
