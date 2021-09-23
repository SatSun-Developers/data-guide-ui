import Header from './components/header';
import Footer from './components/footer/footer';
import Sidebar from './components/sidebar/sidebar';
import LoginUtil from './util/login_util';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      isLoggedInUser: true
    };
  }
  render(){
    let {isLoggedIn} = this.state;
    return(
      <div>
        <Header/>
        <Sidebar isLoggedIn/>
        <Footer/>

      </div>     
    );
  }
}
export default App;
