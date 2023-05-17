import { createStore } from "redux";

const initialState = {
  showDropdown: false,
  showBottomElement: false,
  rollInElement: false,
};

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

  if (action.type === "rollInElement") {
    return {
      ...state,
      rollInElement: !state.rollInElement,
    };
  }

  return state;
};

const store = createStore(appReducer);

export default store;
