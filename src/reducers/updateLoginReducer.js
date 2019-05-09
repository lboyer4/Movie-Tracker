const initialState = false;

export const updateLogin = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGGED_IN':
    return action.loggedIn === true;
    default:
    return state
  }
}