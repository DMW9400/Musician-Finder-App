

export function addUser(user){
  return {
    type: 'ADD_USER',
    payload: user
  }
}

export function fetchUsers(){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users').then(res=>res.json())
    .then(users => {
      dispatch({type:"FETCH_USERS", payload: users})
    })
  }
}

export function fetchInstruments(){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/instruments').then(res=>res.json())
    .then(instruments => {
      dispatch({type:"FETCH_INSTRUMENTS", payload: instruments})
    })
  }
}
export function fetchArtists(){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/artists').then(res=>res.json())
    .then(artists => {
      dispatch({type:"FETCH_ARTISTS", payload: artists})
    })
  }
}
export function fetchGenres(){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/genres').then(res=>res.json())
    .then(genres => {
      dispatch({type:"FETCH_GENRES", payload: genres})
    })
  }
}
