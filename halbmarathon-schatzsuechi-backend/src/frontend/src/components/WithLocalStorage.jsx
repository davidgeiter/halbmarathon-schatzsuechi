import { PersistGate } from "redux-persist/integration/react"
import { EnforceUsername } from "./WithUsername"
import React from "react"

export const WithLocalStorage = ({ children, persistor }) => (
  <PersistGate loading={<span>loading...</span>} persistor={persistor}>
    <EnforceUsername>{children}</EnforceUsername>
  </PersistGate>
)
