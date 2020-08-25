import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  const clicked = () => {
    document.querySelector(".header").classList.add("added");
  }

  return (
    <BrowserRouter>
      <div  className="header" onClick={clicked}>
        <h1>Hello there, UCLA Bruins!</h1>
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