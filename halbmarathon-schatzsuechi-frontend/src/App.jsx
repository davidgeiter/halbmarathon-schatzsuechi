import React from "react"
import { Provider } from "react-redux"
import { initializeStore } from "./configureStore"
import Home from "./pages/home"
import ScanPage from "./pages/scan"
import Leaderboard from "./pages/leaderboard"
import { WithLocalStorage } from "./components/WithLocalStorage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { GlobalStyles } from "./lib/globalStyles"
import styled from "styled-components"

const { store, persistor } = initializeStore()

export const Layout = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`

const App = () => (
  <Router>
    <GlobalStyles />
    <Provider store={store}>
      <Layout>
        <WithLocalStorage persistor={persistor}>
          <Route path="/" exact component={Home} />
          <Route path="/scan/:guid" exact component={ScanPage} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </WithLocalStorage>
      </Layout>
    </Provider>
  </Router>
)

export default App
