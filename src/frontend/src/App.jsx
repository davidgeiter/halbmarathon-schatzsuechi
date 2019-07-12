import React from "react"
import { Provider } from "react-redux"
import { initializeStore } from "./configureStore"
import Home from "./pages/home"
import ScanPage from "./pages/scan"
import { WithLocalStorage } from "./components/WithLocalStorage"
import { BrowserRouter as Router, Route } from "react-router-dom"

const { store, persistor } = initializeStore()

const App = () => (
  <Router>
    <Provider store={store}>
      <WithLocalStorage persistor={persistor}>
        <Route path="/" exact component={Home} />
        <Route path="/scan/:guid" exact component={ScanPage} />
      </WithLocalStorage>
    </Provider>
  </Router>
)

export default App
