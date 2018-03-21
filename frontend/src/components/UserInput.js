import React from 'react'
import { connect } from 'react-redux'


class UserInput extends React.Component{
  state={
    user: {
      name:'',
      password:'',
      borough:'',
      image_url:'',
      age:null,
      gender:'',
      top_song_url:'',
      song_embed_1: '',
      song_embed_2: '',
      song_embed_3: ''
    },
    selectedInstruments:[],
    seekingInstruments:[],
    selectedArtists:[],
    selectedGenres:[]
  }

  handleChange = (event) => {
    this.setState({
      user:{
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }


  populateInstrumentSelect = () => {
    if (this.props.instruments.length > 0){
      let instruments = this.props.instruments[0].map(instrument =>{
         return <option  key={instrument.id} value={instrument.id}>{instrument.name}</option>
      })
      return instruments
    }
  }
  populateArtistSelect = () => {
    if (this.props.artists.length > 0){
      let artists = this.props.artists[0].map(artist =>{
        return <option  key={artist.id} value={artist.id}>{artist.name}</option>
      })
      return artists
    }
  }

  populateGenreSelect = () => {
    if (this.props.genres.length > 0){
      let genres = this.props.genres[0].map(genre =>{
        return <option  key={genre.id} value={genre.id}>{genre.name}</option>
      })
      return genres
    }
  }





  handleSubmit = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: this.state.user.name,
        password: this.state.user.password,
        age: this.state.user.age,
        image_url: this.state.user.image_url,
        gender: this.state.user.gender,
        top_song_url: this.state.user.top_song_url,
        song_embed_1: this.state.user.song_embed_1,
        song_embed_2: this.state.user.song_embed_2,
        song_embed_3: this.state.user.song_embed_3,
        borough: this.state.user.borough,
        selectedInstruments: this.state.selectedInstruments,
        seekingInstruments: this.state.seekingInstruments,
        selectedArtists: this.state.selectedArtists,
        selectedGenres: this.state.selectedGenres
      })
    }).then(res=>res.json().then(data => console.log(data)))
  }

  handleInstrumentChange = (event) => {
    // Ask why this works!
    let instrumentSelect= [].slice.call(event.target.selectedOptions).map(option =>{
      return {id: option.value, name: option.text}
    })
    this.setState({
      selectedInstruments: instrumentSelect
    })
  }
  handleSoughtInstrumentChange = (event) => {
    // Ask why this works!
    let instrumentSelect= [].slice.call(event.target.selectedOptions).map(option =>{
      return {id: option.value, name: option.text}
    })
    this.setState({
      seekingInstruments: instrumentSelect
    },()=>console.log(this.state.seekingInstruments))
  }
  handleArtistChange = (event) => {
    let artistSelect= [].slice.call(event.target.selectedOptions).map(option =>{
      return {id: option.value, name: option.text}
    })
    this.setState({
      selectedArtists: artistSelect
    })
  }
  handleGenreChange = (event) => {
    let genreSelect= [].slice.call(event.target.selectedOptions).map(option =>{
      return {id: option.value, name: option.text}
    })
    this.setState({
      selectedGenres: genreSelect
    })
  }
  handleBoroughChange = (event) => {
    this.setState({user:{
      ...this.state.user,
      borough: event.target.value
      }
    })
  }

  renderBorough = () => {
    return (
      <select onChange={this.handleBoroughChange}>
          <option value="Bronx">Bronx</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
      </select>
    )
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type='text' onChange={this.handleChange} name='name'></input>
          <label>Password</label>
          <input type='text' onChange={this.handleChange} name='password'></input>
          <label>Image Url</label>
          <input type='text' onChange={this.handleChange} name='image_url'></input>
          <label>Age</label>
          <input type='text' onChange={this.handleChange} name='age'></input>
          <label>Gender</label>
          <input type='text' onChange={this.handleChange} name='gender'></input>
          <label>Top Song URL</label>
          <input type='text' onChange={this.handleChange} name='top_song_url'></input>
          <label>Song Embed One</label>
          <input type='text' onChange={this.handleChange} name='song_embed_1'></input>
          <label>Song Embed Two</label>
          <input type='text' onChange={this.handleChange} name='song_embed_2'></input>
          <label>Song Embed Three</label>
          <input type='text' onChange={this.handleChange} name='song_embed_3'></input>
          <label>Instruments</label>
          <select multiple onChange={this.handleInstrumentChange}>
            {this.populateInstrumentSelect()}
          </select>
          <label>Seeking Instruments</label>
          <select multiple onChange={this.handleSoughtInstrumentChange}>
            {this.populateInstrumentSelect()}
          </select>
          <label>Artists</label>
          <select multiple onChange={this.handleArtistChange}>
            {this.populateArtistSelect()}
          </select>
          <label>Genres</label>
          <select multiple onChange={this.handleGenreChange} width={10}>
            {this.populateGenreSelect()}
          </select>
          {this.renderBorough()}
          <input type='submit'></input>
        </form>


      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    instruments: state.instruments,
    artists: state.artists,
    genres: state.genres
  }
}

export default connect(mapStateToProps)(UserInput)
