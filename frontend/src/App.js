import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers, fetchInstruments, fetchGenres, fetchArtists, fetchUserInstruments, fetchUserGenres, fetchUserArtists } from './actions'
import { withRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Container from './components/Container'


class App extends Component {

  componentDidMount(){
    this.props.fetchUsers()
    this.props.fetchInstruments()
    this.props.fetchGenres()
    this.props.fetchArtists()
    this.props.fetchUserInstruments()
    this.props.fetchUserGenres()
    this.props.fetchUserArtists()

    }



  render() {
    return (
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Container}/>

        </div>

    );
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser,
    instruments: state.instruments,
    artists: state.artists,
    genres: state.genres,
    userInstruments: state.userInstruments,
    userGenres: state.userGenres,
    userArtists: state.userArtists
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchUsers: (user) => dispatch(fetchUsers(user)),
    fetchInstruments: (instrument) => dispatch(fetchInstruments(instrument)),
    fetchArtists: (artist) => dispatch(fetchArtists(artist)),
    fetchGenres: (genre) => dispatch(fetchGenres(genre)),
    fetchUserInstruments: (userInstrument) => dispatch(fetchUserInstruments(userInstrument)),
    fetchUserGenres: (userGenre) => dispatch(fetchUserGenres(userGenre)),
    fetchUserArtists: (userArtist) => dispatch(fetchUserArtists(userArtist))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
