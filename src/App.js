import React, { Component } from 'react';
import MyShelf from './components/MyShelf';
import SearchButton from './components/SearchButton';

class App extends Component {
  render () {
    return (
      <main>
        <MyShelf></MyShelf>
        <SearchButton></SearchButton>
      </main>
    );
  }
}

export default App;
