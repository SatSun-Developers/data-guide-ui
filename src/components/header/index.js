import React ,{Component} from 'react';
import '../../App.css';
import logo from '../../logo.svg';
  
class HeaderComp extends Component{

    constructor()
    {
      super();
      
    }
    render(){
        return(
                   <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-nav">
          <ul>Home </ul>
          <ul>Profile </ul>
          <ul>Contanct us </ul>
          <ul>Logout </ul>
        </ul>
      </header>
      </div>
        )
    };

}
export default HeaderComp;