import React from 'react'
import { connect } from 'react-redux'
import { dispatchCurrentUser } from '../actions'
import fetches from '../APIs'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class MyMessages extends React.Component{
  state = {
    messages: [],
    messageText:''
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
  organizeMessages = () => {
    if (this.props.currentUser && this.props.users.length > 0 && this.state.messages.received_messages && this.state.messages.sent_messages){
      let returnObj = {}

      this.state.messages.received_messages.map(message=>{
        if (returnObj[message.sender_id]){
          returnObj[message.sender_id] = [...returnObj[message.sender_id], message]
        }else{
          returnObj[message.sender_id] = [message]
        }
      })

      this.state.messages.sent_messages.map(message=>{
        if (returnObj[message.recipient_id]){
          returnObj[message.recipient_id] = [...returnObj[message.recipient_id], message]
        }else{
          returnObj[message.recipient_id] = [message]
        }
      })

      for (let user in returnObj){
        returnObj[user].sort(function(a, b) {
          let keyA = new Date(a.created_at)
          let keyB = new Date(b.created_at)
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0;
        })

      }
      console.log('return object', returnObj)
      return returnObj
    }
  }

  renderMyMessages = () => {
    let conversations = this.organizeMessages()
    let messageArray = []
    let messagingObject = {}
      for(let partner in conversations){
        let conversationArray = []
        for(let partnerMessages of conversations[partner]){
          let {sender_id, message} = partnerMessages
          let foundMessager = this.props.users[0].find(function(user) {
                  return user.id == sender_id
                })
          let messageString = `${foundMessager.name}: ${message}`
          conversationArray.push(messageString)
        }
        messagingObject[partner]=conversationArray
      }
      console.log(messagingObject)
      let elements = []
      for (let userConvo in messagingObject){
        let foundMessager = this.props.users[0].find(function(user) {
                return user.id == userConvo
              })
        elements.push( <div id='user-list-div'>
              <h1>{foundMessager.name}</h1>
              {messagingObject[userConvo].map(thread=><li style={{margin:'15px'}}>{thread}</li>)}
              <label><span className="field-name">Send {foundMessager.name} a message</span>
              <TextField
                id={`${foundMessager}`}
                multiLine= 'true'
                onChange={this.handleChange}
                placeholder='    Your message here            '
              /></label>
                <FlatButton onClick={this.handleMessageSend} backgroundColor="#90A4AE" hoverColor='#B0BEC5' label="Submit" />
            </div>)
      }
      return elements
  }

  handleChange = (event) => {
    this.setState({
      messageText: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>My Messages</h1>
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
