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
    genres: []
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
    .then(json=>this.setState({instruments:json}, ()=>{console.log("instruments:",this.state.instruments)}))
  }

  retrieveArtists = () => {
    fetch(`http://localhost:3000/api/v1/artists`)
    .then(res=>res.json())
    .then(json=>this.setState({artists:json}, ()=>{console.log("artists:",this.state.artists)}))
  }

  retrieveGenres = () => {
    fetch(`http://localhost:3000/api/v1/genres`)
    .then(res=>res.json())
    .then(json=>this.setState({genres:json}, ()=>{console.log("genres:",this.state.genres)}))
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
        top_song_url: this.state.user.top_song_url
      })
    }).then(res=>res.json())
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
          <input type='submit'></input>
          <select>

          </select>
        </form>

      </div>
    )
  }
}
