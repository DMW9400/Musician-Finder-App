import React from 'react'
import { connect } from 'react-redux'
import { dispatchCurrentUser } from '../actions'
import fetches from '../APIs'

class MyMessages extends React.Component{
  state = {
    messages: []
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser){
      fetches.fetchUserMessages(nextProps.currentUser.id)
      .then(data => {
          this.setState({
            messages: data
          })
        }
      )
    }
  }


  renderMyMessages = () => {
    if (this.props.currentUser && this.props.users.length > 0){
      return this.state.messages.map(message => {
          let sender = this.props.users[0].find(function(user){
            return user.id === message.sender_id
        })
        return (<div>
                  <h2>{sender.name}</h2>
                  <li key={message.id}>{message.message}</li>
                </div>)
      })
    }
  }

  render(){
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



export default connect(mapStateToProps)(MyMessages)
