import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {
  //Currently using an array for student rather than object
  var student = [];

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

  //This function is outdated and can be ignored
  const pickClass = () => {
    alert("you picked this class");
      document.querySelector(".cs_class").classList.add("added");
      setTimeout(() => {
        document.querySelector(".cs_class.added").classList.remove("added");
      }, 1000);
  }
  
  //Displays the classes that have been selected on the homepage dynamically
  function updateDisplay() {
    document.querySelector(".class_display").textContent = "Your current classes: ";
    for (var i = 0; i < student.length; i++) {
      document.querySelector(".class_display").textContent += "\"" + student[i] + ",\" ";
    }
  }

  //Currently only returns false if pre-reqs not met.
  //Does not yet display what classes are missing.
  function verifyPrerequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The prereqs are: ", catalog[id].pre_requisites);
    console.log("You have taken: ", student);
    for (var i in catalog[id].pre_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.indexOf(catalog[id].pre_requisites[i]) === -1) {
        console.log("Class", catalog[id].pre_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }
  function addCS1() {
    if (student.indexOf("CS1") === -1) {
      document.querySelector('.CS1').classList.add("added");
      student.push("CS1");
      console.log(student);
      updateDisplay();
    } else {
      alert("You have already added this class or have not met pre-requisites!");
    }
  }
  
  function removeCS1() {
    try {
      document.querySelector(".CS1.added").classList.remove("added");
      student.splice(student.indexOf("CS1"), 1);
      console.log(student);
      updateDisplay();
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  function addCS31() {
    if (student.indexOf("CS31") === -1) {
      document.querySelector('.CS31').classList.add("added");
      student.push("CS31");
      console.log(student);
      updateDisplay();
    } else {
      alert("You have already added this class or have not met pre-requisites!");
    }
  }

  function removeCS31() {
    try {
      document.querySelector(".CS31.added").classList.remove("added");
      student.splice(student.indexOf("CS31"), 1);
      console.log(student);
      updateDisplay();
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }
  function addCS32() {
    if (student.indexOf("CS32") === -1 && verifyPrerequisites(2)) {
      document.querySelector('.CS32').classList.add("added");
      student.push("CS32");
      console.log(student);
      updateDisplay();
    } else {
      alert("You have already added this class or have not met pre-requisites!");
    }
  }

  function removeCS32() {
    try {
      document.querySelector(".CS32.added").classList.remove("added");
      student.splice(student.indexOf("CS32"), 1);
      console.log(student);
      updateDisplay();
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }
  console.log(catalog.slice(0,1));
  return (<React.Fragment>
  <h2 className="class_display">Your current classes:</h2>
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