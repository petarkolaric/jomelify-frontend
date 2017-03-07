import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import UploadForm from './components/UploadForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <UploadForm/>
      </div>
    );
  }
}

export default App;
