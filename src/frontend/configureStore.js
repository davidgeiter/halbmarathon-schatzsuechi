import { createStore, applyMiddleware } from "redux"
import { handleActions } from "redux-actions"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const initialState = {
  foo: 1,
}

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = handleActions({}, initialState)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export function initializeStore(initialState = initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
