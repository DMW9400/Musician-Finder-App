const fetches = {
  loginFetch: (username,password) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        token: localStorage.getItem('token')
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
    }).then(res => res.json())
  },
  fetchCurrentUser: () => {
    return fetch('http://localhost:3000/api/v1/active_user', {
      method: 'POST',
      headers: {
        'authorization': localStorage.getItem('token')
        }
    }).then(res => res.json())
  },
  fetchMessages: () => {
    return fetch('http://localhost:3000/api/v1/messages')
    .then(res => res.json())
  },
  fetchUserMessages: (recipientID) => {
    return fetch(`http://localhost:3000/api/v1/users/${recipientID}/messages`)
    .then(res => res.json())
  }
}


export default fetches
