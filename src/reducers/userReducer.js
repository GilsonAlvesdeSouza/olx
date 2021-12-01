/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  email: "reducer@gmail.com",
};


export default (state = initialState, action = {}) => {
  
    switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload.email };
    default:
      break;
  }

  return state;
};
