import React, { Component } from 'react';
import MyShelf from './components/MyShelf';
import SearchButton from './components/SearchButton';
import MyShelfButton from './components/MyShelfButton';
import Books from './components/Books';
import { Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <main>
        <Route exact path='/' render={() => (
          <section>
            <MyShelf></MyShelf>
            <SearchButton></SearchButton>
          </section>
        )}/>
        <Route exact path='/search' render={() => (
          <section>
            <Books></Books>
            <MyShelfButton></MyShelfButton>
          </section>
        )}/>
      </main>
    );
  }
}

export default App;
