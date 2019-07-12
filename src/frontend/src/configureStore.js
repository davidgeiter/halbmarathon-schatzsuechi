import { createStore, applyMiddleware } from "redux"
import { handleActions, createAction } from "redux-actions"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const initialState = {
  username: null,
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["username"],
}

export const setUsername = createAction("setUsername", username => username)

const rootReducer = handleActions(
  {
    [setUsername.toString()]: (state, { payload }) => ({
      ...state,
      username: payload,
    }),
  },
  initialState,
)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export function initializeStore(state = initialState) {
  const store = createStore(
    persistedReducer,
    state,
    composeWithDevTools(applyMiddleware()),
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
