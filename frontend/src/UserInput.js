import React from 'react'

export default class UserInput extends React.Component{
  state={
    name:'',
    image_url:'',
    age:null,
    gender:'',
    top_song_url:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
        name: this.state.name,
        image_url: this.state.image_url,
        age: this.state.age,
        gender: this.state.gender,
        top_song_url: this.state.top_song_url
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
        </form>

      </div>
    )
  }
}
