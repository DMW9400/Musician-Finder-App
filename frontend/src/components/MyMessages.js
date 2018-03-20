import React from 'react'
import { connect } from 'react-redux'
import { dispatchCurrentUser } from '../actions'
import fetches from '../APIs'

class MyMessages extends React.Component{
  state = {
    messages: []
  }

  componentDidMount(){
    if (localStorage.length===0){
      this.props.history.push('/login')
    }else{
      this.props.dispatchCurrentUser()
      fetches.fetchMessages()
        .then(json => {
          this.setState({
            messages: json
          })
        }
        )
      }
    }


  renderMyMessages = () => {
    if (this.props.currentUser && this.props.users){
      return this.state.messages.map(message=>{
        if (message.recipient_id === this.props.currentUser.id){
          let senderName = this.props.users.find(function(user){
            user.id === message.sender_id
          })
          return (<div>
                  "DIV"
                  <h2>{senderName}</h2>
                  <li key={message.id}>{message.message}</li>
                </div>)
        }
      })
    }
  }

  render(){
    console.log(this.props.users)
    // this.props.currentUser ? console.log(this.props.currentUser.id) : console.log("NULL USER FOR NOW")
    return(
      <div>
        "MY MESSAGES"
        <ul>
          {this.renderMyMessages()}
        </ul>
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



export default connect(mapStateToProps, {dispatchCurrentUser})(MyMessages)
