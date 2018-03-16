import React from 'react'



export default class UserInput extends React.Component{
  state={
    user: {
      name:'',
      image_url:'',
      age:null,
      gender:'',
      top_song_url:''
    },
    instruments: [],
    artists: [],
    genres: [],
    selectedInstruments:[],
    seekingInstruments:[],
    selectedArtists:[],
    selectedGenres:[]
  }

  componentDidMount(){
    this.retrieveInstruments()
    this.retrieveArtists()
    this.retrieveGenres()
  }

  handleChange = (event) => {
    this.setState({
      user:{
        ...this.state.user,
        [event.target.name]: event.target.value
      }

    })
  }

  retrieveInstruments = () => {
    fetch(`http://localhost:3000/api/v1/instruments`)
    .then(res=>res.json())
    .then(json=>this.setState({instruments:json}))
  }

  retrieveArtists = () => {
    fetch(`http://localhost:3000/api/v1/artists`)
    .then(res=>res.json())
    .then(json=>this.setState({artists:json}))
  }

  retrieveGenres = () => {
    fetch(`http://localhost:3000/api/v1/genres`)
    .then(res=>res.json())
    .then(json=>this.setState({genres:json}))
  }

  populateInstrumentSelect = () => {
    let instruments = this.state.instruments.map(instrument =>{
      return <option  key={instrument.id} value={instrument.id}>{instrument.name}</option>
    })
    return instruments
  }
  populateArtistSelect = () => {
    let artists = this.state.artists.map(artist =>{
      return <option  key={artist.id} value={artist.id}>{artist.name}</option>
    })
    return artists
  }
  populateGenreSelect = () => {
    let genres = this.state.genres.map(genre =>{
      return <option  key={genre.id} value={genre.id}>{genre.name}</option>
    })
    return genres
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
        image_url: this.state.user.image_url,
        age: this.state.user.age,
        gender: this.state.user.gender,
        top_song_url: this.state.user.top_song_url,
        selectedInstruments: this.state.selectedInstruments,
        seekingInstruments: this.state.seekingInstruments,
        selectedArtists: this.state.selectedArtists,
        selectedGenres: this.state.selectedGenres
      })
    }).then(res=>res.json())
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
    }, ()=>{console.log(this.state.seekingInstruments)})
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
    },()=>{console.log("Selected Genres STATE:", this.state.selectedGenres)})
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type='text' onChange={this.handleChange} name='name'></input>
          <label>Image Url</label>
          <input type='text' onChange={this.handleChange} name='image_url'></input>
          <label>Age</label>
          <input type='text' onChange={this.handleChange} name='age'></input>
          <label>Gender</label>
          <input type='text' onChange={this.handleChange} name='gender'></input>
          <label>Top Song URL</label>
          <input type='text' onChange={this.handleChange} name='top_song_url'></input>
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
          <input type='submit'></input>
        </form>
        

      </div>
    )
  }
}
