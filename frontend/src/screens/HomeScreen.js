import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {
  const calender = [];

  const [catalog, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/cs_classes");
      setProduct(data);
    };
    fetchData();
    return () => {
    };
  }, []);

  const pickClass = () => {
    alert("you picked this class");
      document.querySelector(".cs_class").classList.add("added");
      setTimeout(() => {
        document.querySelector(".cs_class.added").classList.remove("added");
      }, 1000);
  }
  
  function updateDisplay() {
    document.querySelector(".class_display").textContent = "Your current classes: ";
    for (var i = 0; i < calender.length; i++) {
      document.querySelector(".class_display").textContent += "\"" + calender[i] + ",\" ";
    }
  }

  function addCS1() {
    if (calender.indexOf("CS1") === -1) {
      document.querySelector('.CS1').classList.add("added");
      calender.push("CS1");
      console.log(calender);
      updateDisplay();
    } else {
      alert("You have already added this class!");
    }
  }
  
  function removeCS1() {
    try {
      document.querySelector(".CS1.added").classList.remove("added");
      calender.splice(calender.indexOf("CS1"), 1);
      console.log(calender);
      updateDisplay();
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  function addCS31() {
    if (calender.indexOf("CS31") === -1) {
      document.querySelector('.CS31').classList.add("added");
      calender.push("CS31");
      console.log(calender);
      updateDisplay()
    } else {
      alert("You have already added this class!");
    }
  }

  function removeCS31() {
    try {
      document.querySelector(".CS31.added").classList.remove("added");
      calender.splice(calender.indexOf("CS31"), 1);
      console.log(calender);
      updateDisplay()
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }
  function addCS32() {
    if (calender.indexOf("CS32") === -1) {
      document.querySelector('.CS32').classList.add("added");
      calender.push("CS32");
      console.log(calender);
      updateDisplay()
    } else {
      alert("You have already added this class!");
    }
  }

  function removeCS32() {
    try {
      document.querySelector(".CS32.added").classList.remove("added");
      calender.splice(calender.indexOf("CS32"), 1);
      console.log(calender);
      updateDisplay()
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }
  console.log(catalog.slice(0,1));
  return (<React.Fragment>
  {
    catalog.map((catalog) => 
      <p className={"cs_class"} onClick={pickClass}>{catalog.name}</p>
    )
  }
  <p>Display just specific classes</p>
  <p className="class_display">Your current classes:</p>
  { 
    catalog.slice(0,1).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name} onClick={pickClass}>
        {catalog.name}
      </span>
      <button onClick = {addCS1}>Pick Class</button>
      <button onClick={removeCS1}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  { 
    catalog.slice(1,2).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name} onClick={pickClass}>
        {catalog.name}
      </span>
      <button onClick = {addCS31}>Pick Class</button>
      <button onClick={removeCS31}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  { 
    catalog.slice(2,3).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name} onClick={pickClass}>
        {catalog.name}
      </span>
      <button onClick = {addCS32}>Pick Class</button>
      <button onClick={removeCS32}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  </React.Fragment>)
}

export default HomeScreen;