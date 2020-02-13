import {combineReducers, createStore} from "redux";

const initState = (title = "", userText = "") => ({
  title,
  userText,
});

// actions.js
export const insertText = userText => ({
  type: "INSERT_TEXT",
  userText,
});

// reducers.js
export const geod = (state = {userText: ""}, action) => {
  switch (action.type) {
    case "INSERT_TEXT":
      return action.userText;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export const store = configureStore();
