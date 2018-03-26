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
      console.log ('state: ', this.state.messages)
      console.log('convo object: ', returnObj)
      // console.log(this.state.messages)
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
