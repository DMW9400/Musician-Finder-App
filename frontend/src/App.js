import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import { connect } from 'react-redux'
import { fetchUsers, fetchInstruments, fetchGenres, fetchArtists } from './actions'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {Welcome} from './components/Welcome'
import UsersList from './components/UsersList'
import Profile from './components/Profile'
import MessagePage from './components/MessagePage'

class App extends Component {

  componentDidMount(){
    this.props.fetchUsers()
    this.props.fetchInstruments()
    this.props.fetchGenres()
    this.props.fetchArtists()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/create-user" component={UserInput} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path = "/users/:id" component={Profile} />
            <Route exact path="/users/:id/message" component={MessagePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchUsers: (user) => dispatch(fetchUsers(user)),
    fetchInstruments: (instrument) => dispatch(fetchInstruments(instrument)),
    fetchArtists: (artist) => dispatch(fetchArtists(artist)),
    fetchGenres: (genre) => dispatch(fetchGenres(genre))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
