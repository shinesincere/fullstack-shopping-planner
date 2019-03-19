import React, { Component } from 'react'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppNavbar from './views/AppNavbar'
import ShoppingList from './views/ShoppingList'

import store from './states/store'

class App extends Component {
  render() {
    return <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
    </Provider>
  }
}

export default App
