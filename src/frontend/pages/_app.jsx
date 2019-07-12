import App, { Container } from "next/app"
import React from "react"
import withReduxStore from "../lib/with-redux-store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore.store}>
          <PersistGate loading={null} persistor={reduxStore.persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
