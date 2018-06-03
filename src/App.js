import React, { Component } from 'react'
import MyShelf from './components/MyShelf'
import Books from './components/Books'
import { Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <main>
        <Route exact path='/' render={() => (
          <MyShelf></MyShelf>
        )}/>
        <Route exact path='/search' render={() => (
          <Books></Books>
        )}/>
      </main>
    )
  }
}

export default App
