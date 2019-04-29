
import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers'
import Fkey from './src/fkey.js'
import LoginForm  from './src/LoginForm'
import { Header } from './src/common'
import Router from './src/Router'

export default class App extends Component {

componentWillMount(){
  console.log(Fkey)
  firebase.initializeApp(Fkey())
}

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
