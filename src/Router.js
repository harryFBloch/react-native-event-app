import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './LoginForm'
import FeedSettings from './FeedSettings'
import EventDeckContainer from './containers/EventDeckContainer'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
        </Scene>

        <Scene key="main">
          <Scene key="account" component={FeedSettings} title="Feed Settings" />
        </Scene>

        <Scene key="search">
          <Scene key="eventDeck" component={EventDeckContainer} title="Your Feed" />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent
