const loginFetch = (username,password) => {
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
}

export default loginFetch
