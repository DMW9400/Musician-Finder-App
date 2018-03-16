

export function addUser(user){
  return {
    type: 'ADD_USER',
    payload: user
  }
}

export function fetchUsers(){
  console.log('WE FETCHIN USERS')
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users').then(res=>res.json())
    .then(users => {
      dispatch({type:"FETCHED_USERS", payload: users})
    })
  }
}
