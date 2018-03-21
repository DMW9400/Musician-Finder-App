import React from 'react'
import { connect } from 'react-redux'
import fetches from '../APIs'

class Profile extends React.Component {

  renderPlayedInstruments(){
    if (this.props.users.length > 0){
      let relUser = this.findById()
      return (
        <ul>
          {relUser.played_instruments.map(instrument => <li key={instrument.id}>{instrument.name}</li>)}
        </ul>
      )
    }
  }
  renderSeekingInstruments(){
    if (this.props.users.length > 0){
      let relUser = this.findById()
      return (
        <ul>
          {relUser.seeking_instruments.map(instrument => <li key={instrument.id}>{instrument.name}</li>)}
        </ul>
      )
    }
  }
  renderArtistsLiked(){
    if (this.props.users.length > 0){
      let relUser = this.findById()
      return (
        <ul>
          {relUser.artists.map(artist => <li key={artist.id}>{artist.name}</li>)}
        </ul>
      )
    }
  }
  renderGenresLiked(){
    if (this.props.users.length > 0){
      let relUser = this.findById()
      return (
        <ul>
          {relUser.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      )
    }
  }

  findById = () => {
       if (this.props.users.length > 0){
         let found = this.props.users[0].find((user) => {
          return user.id === parseInt(this.props.match.params.id)
        })
        return found
       }
  }
  renderPage = () => {
    let relUser = this.findById()
    if (this.props.users.length > 0){
          return (
            <div>
              <h1>{relUser.name}</h1>
              <img src={relUser.image_url} alt='' ></img>
              <div className="UserInfo">
                <p>Age: {relUser.age}</p>
                <p>Gender: {relUser.gender}</p>
                <p>Borough: {relUser.borough}</p>
              </div>
              <div>

              </div>
              <iframe title ='' width="65%" height="150" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283077932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
          )
    }else{
        return   <h1>Loading</h1>
        }
  }
  renderInstrumentsPlayed = () => {
    return (
      <div>
        {this.state.playingInstruments.map(instrument =>  <p>{instrument.name}</p>)}
      </div>
      )
  }

  render(){
    console.log("Profile Props:", this.props)
    if (this.props.userInstruments.length === 0) {
      return <div>Loading</div>
    }
    return(
      <div>
        {this.renderPage()}
        <div>
          <h2>Instruments Played:</h2>
          {this.renderPlayedInstruments()}
          <h2>Instruments Seeking:</h2>
          {this.renderSeekingInstruments()}
          <h2>Genre Influences:</h2>
          {this.renderGenresLiked()}
          <h2>Artist Influences:</h2>
          {this.renderArtistsLiked()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser,
    instruments: state.instruments,
    userInstruments: state.userInstruments
  }
}

export default connect(mapStateToProps)(Profile)
