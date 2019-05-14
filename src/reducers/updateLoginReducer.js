const initialState = {};

export const updateLogin = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGGED_IN':
    return action.user;
    case 'LOGGED_OUT':
    return {};
    default:
    return state
  }
}