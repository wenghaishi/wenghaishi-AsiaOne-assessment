import { createStore } from "redux";

const initialState = { showDropdown: false };

const appReducer = (state = initialState, action) => {
  if (action.type === "toggleDropdown") {
    return {
      showDropdown: !state.showDropdown,
    };
  }

  return state;
};

const store = createStore(appReducer);

export default store;
