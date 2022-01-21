import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
 class App extends Component {
   name='vishal'
  render() {
    return (
      <>
     <NavBar/>
     <News/>
     </>
    );
  }
}


export default App;
