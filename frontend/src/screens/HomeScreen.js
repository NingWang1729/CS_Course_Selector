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

  function addClass(class_id) {
    if (student.indexOf(catalog[class_id].name) === -1 && verifyPrerequisites(class_id)) {
      let tag = "." + catalog[class_id].name;
      document.querySelector(tag).classList.add("added");
      student.push(catalog[class_id].name);
      console.log(student);
      updateDisplay();
    } else {
      alert("You have already added this class or have not met pre-requisites!");
    }
  }

  function removeClass(class_id) {
    try {
      let tag = "." + catalog[class_id].name + ".added";
      document.querySelector(tag).classList.remove("added");
      student.splice(student.indexOf(catalog[class_id].name), 1);
      console.log(student);
      updateDisplay();
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
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

  return (<React.Fragment>
  <h2 className="class_display">Your current classes:</h2>
  { 
    catalog.slice(0,1).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name}>
        {catalog.name}
      </span>
      <button onClick = {addClass.bind(this, 0)}>Pick Class</button>
      <button onClick={removeClass.bind(this, 0)}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  { 
    catalog.slice(1,2).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name}>
        {catalog.name}
      </span>
      <button onClick = {addClass.bind(this, 1)}>Pick Class</button>
      <button onClick={removeClass.bind(this, 1)}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  { 
    catalog.slice(2,3).map((catalog) => 
      <React.Fragment>
      <span className={"cs_class"} className={catalog.name}>
        {catalog.name}
      </span>
      <button onClick = {addClass.bind(this, 2)}>Pick Class</button>
      <button onClick={removeClass.bind(this, 2)}>Remove Class</button>
      <br/>
      <br/>
      </React.Fragment>
    )
  }
  </React.Fragment>)
}

export default HomeScreen;