import React from 'react'
import { connect } from 'react-redux'
import fetches from '../APIs'
import { Link } from 'react-router-dom'

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
            <div id="container-div">
              <div className='profile-user-div'>
                <h1>{relUser.name}</h1>
                <img className='profile' src={relUser.image_url} alt='' ></img>
                <div align='left' className="user-info">
                  <p>Age: {relUser.age}</p>
                  <p>Gender: {relUser.gender}</p>
                  <p>Borough: {relUser.borough}</p>
                  <Link to={`/base/users/${relUser.id}/message`} style={{display:'block', margin:'10px',fontWeight: 'bold',textDecoration: 'none', borderBottom: 'blue', color:'#546E7A'}}>
                    Message {relUser.name}
                  </Link>
                </div>
              </div>
              <div className='instruments-div'>
                <span className='instrument-span'>
                  <h2>Instruments Played:</h2>
                  {this.renderPlayedInstruments()}
                </span>
                <span className='instrument-span'>
                  <h2>Instruments Seeking:</h2>
                  {this.renderSeekingInstruments()}
                </span>
                <span className='instrument-span'>
                  <h2>Genre Influences:</h2>
                  {this.renderGenresLiked()}
                </span>
                <span className='instrument-span'>
                  <h2>Artist Influences:</h2>
                  {this.renderArtistsLiked()}
                </span>

              </div>
              <div id='soundCloud-iFrame'>
                <iframe title ='' width="65%" height="150" scrolling="no" frameBorder="no" allow="autoplay" src={relUser.top_song_url}></iframe>
              </div>
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
