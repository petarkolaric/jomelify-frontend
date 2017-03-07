import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import UploadForm from './components/UploadForm'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <UploadForm/>
        <Footer/>
      </div>
    );
  }
}

export default App;
