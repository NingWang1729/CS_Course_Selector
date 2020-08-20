import React from 'react';
import './App.css';
import CS_Class from './cs_class.js';
import Student from './student.js';

var cs1 = new CS_Class("CS1", 1, [], [], [], []);
function App() {
  return (
    <div>
      <h1>Hello There, {cs1.get_name()}!</h1>
    </div>
  );
}

export default App;
