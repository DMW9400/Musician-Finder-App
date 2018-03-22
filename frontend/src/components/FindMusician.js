import React from 'react'
import { connect } from 'react-redux'
import fetches from '../APIs'

class FindMusician extends React.Component {

  state={
    shared_artists:'',
    shared_genres:'',
    instrument_match:''
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  sortUsers = () => {
    let ranking = {}
    if(this.props.users.length > 0){
      this.props.users[0].map(user =>{
        ranking[user.name] = {
          id: user.id,
          shared_artists:0,
          shared_genres:0,
          instrument_match:0
        }

        user.played_instruments.map(playedInst =>{
          let seekingInstrumentsIDS = this.props.currentUser.seeking_instruments.map(instrument=>instrument.id)
          if (seekingInstrumentsIDS.includes(playedInst.id)){
            ranking[user.name].instrument_match ++
          }
        })

        user.genres.map(genre =>{
          let genreIDs = this.props.currentUser.genres.map(genre=>genre.id)
          if (genreIDs.includes(genre.id)){
            ranking[user.name].shared_genres ++
          }
        })

        user.artists.map(artist =>{
          let artistIDs = this.props.currentUser.artists.map(artist=>artist.id)
          if (artistIDs.includes(artist.id)){
            ranking[user.name].shared_artists ++
          }
        })
      })
    }
    return ranking
  }

  prioritizeUsersViaArtists = () => {
    let ranking = this.sortUsers()
    if (Object.keys(ranking).length > 0){
      if (this.state.shared_artists === '1'){
        this.keyAlteration(ranking,"shared_artists",5)
      }else if(this.state.shared_artists === '2'){
        this.keyAlteration(ranking,"shared_artists",3)
      }else if(this.state.shared_artists === '3') {
        this.keyAlteration(ranking,"shared_artists",1)
      }
      return ranking
    }
  }

  prioritizeUsersViaGenres = () => {
    let ranking = this.prioritizeUsersViaArtists()
    if (this.state.shared_genres === '1'){
      this.keyAlteration(ranking,"shared_genres",5)
    }else if(this.state.shared_genres === '2'){
      this.keyAlteration(ranking,"shared_genres",3)
    }else if(this.state.shared_genres === '3') {
      this.keyAlteration(ranking,"shared_genres",1)
    }
    return ranking
  }

  prioritizeUsersViaInstruments = () => {
    let ranking = this.prioritizeUsersViaGenres()
    if (this.state.instrument_match === '1'){
      this.keyAlteration(ranking,"instrument_match",5)
    }else if(this.state.instrument_match === '2'){
      this.keyAlteration(ranking,"instrument_match",3)
    }else if(this.state.instrument_match === '3') {
      this.keyAlteration(ranking,"instrument_match",1)
    }

    return ranking
    console.log(ranking)
  }

  keyAlteration = (object, term, increment) => {
    for(let user in object){
      for(let key in object[user]){
        if (key==term){
          object[user][key]+=increment
        }
      }
    }
  }

  sortFinalRanking = () => {
    let ranking = this.prioritizeUsersViaInstruments()
    let returnObject = {}
    let tally = 0

    for (let user in ranking){
      for (let key in ranking[user]){
        if (key == "shared_artists" || key == "shared_genres" || key == "instrument_match" ){
          // console.log(ranking[user][key])
          tally += ranking[user][key]
          returnObject[user] = tally
        }
      }
      tally = 0
      console.log("user scores: ",ranking)
    }
    console.log("user totals: ", returnObject)

    // let obj = {a: 24, b: 12, c:21, d:15};
    //
    // // Get an array of the keys:
    // let keys = Object.keys(obj);
    //
    // // Then sort by using the keys to lookup the values in the original object:
    // keys.sort(function(a, b) { return obj[a] - obj[b] });
    //
    // console.log(keys);

  }

  render(){
    this.prioritizeUsersViaInstruments()
    this.sortFinalRanking()
    return(
      <div>
        <h1>Find your Musical Match!</h1>
        <h3>Prioritize the following criteria on a scale of 1-3:</h3>
        <form>
          <label>Listens to artists you like:</label>
          <input name='shared_artists' onChange={this.handleChange}></input>
          <label>Listens to genres you like:</label>
          <input name='shared_genres' onChange={this.handleChange}></input>
          <label>Plays an instrument you're looking for:</label>
          <input name='instrument_match' onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(FindMusician)
