const initialState = [];

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        Logged: true,
      };
    case "LOGOUT":
      return {
        ...state,
        Logged: false,
      };
    default:
      return state;
  }
};

export default Auth;
