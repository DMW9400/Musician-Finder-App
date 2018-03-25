import React from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const selectStyle = {
  color: 'orange',
  width: '70%',
  backgroundColor: '#B0BEC5',
}
const menuItem = {
  color:'#263238',
  backgroundColor:'#B0BEC5'
}

const textColor = {
  color: '#795548'
}
document.body.style = 'background: #E0E0E0;';

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
    selectedGenres:[],
    values:[]
  }

  handleChange = (event) => {
    this.setState({
      user:{
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    }, ()=> console.log("State changing: ", this.state))
  }

  handleSelectedInstrumentChange = (event, index, selectedInstruments) => this.setState({selectedInstruments},()=>console.log(this.state.selectedInstruments));
  handleSeekingInstrumentChange = (event, index, seekingInstruments) => this.setState({seekingInstruments},()=>console.log(this.state.seekingInstruments));

  menuItems(values) {
    if (this.props.instruments.length>0) {
      return this.props.instruments[0].map((instrument) => (
        <MenuItem
          key={instrument.id}
          insetChildren={true}
          checked={values && values.indexOf(instrument) > -1}
          value={instrument.name}
          primaryText={instrument.name}
        />
      ));
    }
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
    }, ()=> console.log(this.state.selectedInstruments))
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
    console.log(this.props)
    const selectedInstruments = this.state.selectedInstruments
    const seekingInstruments = this.state.seekingInstruments
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label style={{position: 'absolute', top: '80px', left: '200px', width: '200px', height: '100px'}}>Name</label>
          {/* <input type='text' onChange={this.handleChange} name='name'></input> */}
          <TextField
            name='name'
            onChange={this.handleChange}
          />
          <label>Password</label>
          {/* <input type='text' onChange={this.handleChange} name='password'></input> */}
          <TextField
            name='password'
            onChange={this.handleChange}
          />
          <label>Image Url</label>
          {/* <input type='text' onChange={this.handleChange} name='image_url'></input> */}
          <TextField
            name='image_url'
            onChange={this.handleChange}
          />
          <label>Age</label>
          {/* <input type='text' onChange={this.handleChange} name='age'></input> */}
          <TextField
            name='age'
            onChange={this.handleChange}
          />
          <label>Gender</label>
          {/* <input type='text' onChange={this.handleChange} name='gender'></input> */}
          <TextField
            name='gender'
            onChange={this.handleChange}
          />
          <label>Top Song URL</label>
          {/* <input type='text' onChange={this.handleChange} name='top_song_url'></input> */}
          <TextField
            name='top_song_url'
            onChange={this.handleChange}
          />
          <label>Song Embed One</label>
          <TextField
            name='song_embed_1'
            onChange={this.handleChange}
          />
          {/* <input type='text' onChange={this.handleChange} name='song_embed_1'></input> */}
          <label>Song Embed Two</label>
          <TextField
            name='song_embed_2'
            onChange={this.handleChange}
          />
          {/* <input type='text' onChange={this.handleChange} name='song_embed_2'></input> */}
          <label>Song Embed Three</label>
          <TextField
            name='song_embed_3'
            onChange={this.handleChange}
          />
          {/* <input type='text' onChange={this.handleChange} name='song_embed_3'></input> */}
          {/* <label>Instruments</label> */}
          {/* <select multiple onChange={this.handleInstrumentChange}>
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
          {this.renderBorough()} */}
          <label>Instruments you play:</label>
          <SelectField
            name='playedInstruments'
            menuItemStyle = {menuItem}
            labelStyle={textColor}
            selectedMenuItemStyle={textColor}
            style={selectStyle}
            multiple={true}
            hintText="Select an Instrument"
            value={selectedInstruments}
            onChange={this.handleSelectedInstrumentChange}
            >
              {this.menuItems(selectedInstruments)}
            </SelectField>
            <label>Instruments you want collaborators to play:</label>
            <SelectField
              name='playedInstruments'
              menuItemStyle = {menuItem}
              labelStyle={textColor}
              selectedMenuItemStyle={textColor}
              style={selectStyle}
              multiple={true}
              hintText="Select an Instrument"
              value={seekingInstruments}
              onChange={this.handleSeekingInstrumentChange}
              >
                {this.menuItems(seekingInstruments)}
              </SelectField>
          {/* <input type='submit'></input> */}
            <FlatButton onClick={this.handleSubmit} backgroundColor="#90A4AE" hoverColor='#B0BEC5' label="Submit" />
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
