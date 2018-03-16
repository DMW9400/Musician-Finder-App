const defaultState = {
  users: []
}

export function rootReducer(state=defaultState,action){
  switch(action.type){
    case "FETCHED_USERS":
      console.log("reducer log:",action)
      return {...state, users: [...state.users,action.payload]}
    default:
      return state
  }
}
