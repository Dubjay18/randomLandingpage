export const initialState = {
  darkmode: true,
  user: null,
};
export const actionTypes = {
  SET_DARKMODE: "SET_DARKMODE",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DARKMODE:
      return {
        ...state,
        darkmode: action.darkmode,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
