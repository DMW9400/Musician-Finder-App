import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {


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
              <iframe title ='' width="65%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283077932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
          )
    }else{
        return   <h1>Loading</h1>
        }
  }

  render(){
    return(
      <div>
        {this.renderPage()}
        <a href="/users">View Users</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Profile)
