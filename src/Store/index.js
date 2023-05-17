import { createStore } from "redux";

const initialState = { showDropdown: false, showBottomElement: false };

const appReducer = (state = initialState, action) => {
  if (action.type === "toggleDropdown") {
    return {
      ...state,
      showDropdown: !state.showDropdown,
    };
  }

  if (action.type === "toggleBottomElement") {
    return {
      ...state,
      showBottomElement: !state.showBottomElement,
    };
  }

  return state;
};

const store = createStore(appReducer);

export default store;
