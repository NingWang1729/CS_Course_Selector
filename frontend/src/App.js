import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import CS_Class from './cs_class.js';
import Student from './student.js';
import HomeScreen from './screens/HomeScreen';

var cs1 = new CS_Class("CS1", 1, [], [], [], []);

function App() {
  const clicked = () => {
    document.querySelector(".header").classList.add("added");
  }

  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // }
  return (
    <BrowserRouter>
      <div  className="header" onClick={clicked}>
        <h1>Hello There, {cs1.get_name()}!</h1>
      </div>
      <main className="main">
        <div className="content">
          {/* <Route path="/other" component={OtherScreen} /> */}
          <Route path="/" exact={true} component={HomeScreen}/>
        </div>
      </main>
    </BrowserRouter>
  );
  
}

export default App;