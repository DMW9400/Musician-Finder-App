const defaultState = {
  users: [],
  instruments:[],
  artists:[],
  genres:[]
}

export function rootReducer(state=defaultState,action){
  switch(action.type){
    case "FETCH_USERS":
      return {...state, users: [...state.users,action.payload]}
    case "FETCH_INSTRUMENTS":
      return {...state, instruments:[...state.instruments,action.payload]}
    case "FETCH_ARTISTS":
      return {...state, artists:[...state.artists,action.payload]}
    case "FETCH_GENRES":
      return {...state, genres:[...state.genres,action.payload]}
    default:
      return state
  }
}
