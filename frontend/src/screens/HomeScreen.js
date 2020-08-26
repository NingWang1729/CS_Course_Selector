import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Student from '../student.js';

function HomeScreen(props) {
  //Currently using an array for student.current_classes rather than object
  // var student.current_classes = [];
  //Name, completed classes, current classes,
  var student = new Student("Bruin", [], [],[]);

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

  //Displays the classes that have been selected on the homepage dynamically
  function updateDisplay() {
    console.log("Updating display...");
    document.querySelector(".class-display-1").textContent = "Your completed classes: ";
    for (var i = 0; i < student.completed_classes.length; i++) {
      document.querySelector(".class-display-1").textContent += "\"" + student.completed_classes[i] + ",\" ";
    }
    document.querySelector(".class-display-2").textContent = "Your current classes: ";
    for (var i = 0; i < student.current_classes.length; i++) {
      document.querySelector(".class-display-2").textContent += "\"" + student.current_classes[i] + ",\" ";
    }
    document.querySelector(".class-display-3").textContent = "Your planned classes: ";
    for (var i = 0; i < student.planned_classes.length; i++) {
      document.querySelector(".class-display-3").textContent += "\"" + student.planned_classes[i] + ",\" ";
    }
  }

  function addCompletedClass(class_id) {
    try {
      if (!student.is_scheduled(catalog[class_id].name)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("added");
        student.completed_classes.push(catalog[class_id].name);
        console.log(student.completed_classes);
        updateDisplay();
      } else {
        alert("You have already added this class or have not met pre-requisites!");
      }
    } catch (error) {
      alert("ERROR");
    }
  }

  function removeCompletedClass(class_id) {
    try {
      if (student.completed_classes.indexOf(catalog[class_id].name) !== -1) {
        let tag = "." + catalog[class_id].name + ".added";
        document.querySelector(tag).classList.remove("added");
        student.completed_classes.splice(student.completed_classes.indexOf(catalog[class_id].name), 1);
        console.log(student.completed_classes);
        updateDisplay();
      } else {
        throw Error;
      }
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  function addClass(class_id) {
    try {
      if (!student.is_scheduled(catalog[class_id].name) && verifyPrerequisites(class_id)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("added");
        student.current_classes.push(catalog[class_id].name);
        console.log(student.current_classes);
        updateDisplay();
      } else {
        alert("You have already added this class or have not met pre-requisites!");
      }
    } catch (error) {
      alert("ERROR");
    }
  }

  function removeClass(class_id) {
    try {
      if (student.current_classes.indexOf(catalog[class_id].name) !== -1) {
        let tag = "." + catalog[class_id].name + ".added";
        document.querySelector(tag).classList.remove("added");
        student.current_classes.splice(student.current_classes.indexOf(catalog[class_id].name), 1);
        console.log(student.current_classes);
        updateDisplay();
      } else {
        throw Error;
      }
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  function addClassToPlan(class_id) {
    try {
      if (!student.is_scheduled(catalog[class_id].name)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("added");
        student.planned_classes.push(catalog[class_id].name);
        console.log(student.planned_classes);
        updateDisplay();
      } else {
        alert("You have already added this class or have not met pre-requisites!");
      }
    } catch {
      alert("ERROR");
    }
  }

  function removeClassFromPlan(class_id) {
    try {
      if (student.planned_classes.indexOf(catalog[class_id].name) !== -1) {
        let tag = "." + catalog[class_id].name + ".added";
        document.querySelector(tag).classList.remove("added");
        student.planned_classes.splice(student.planned_classes.indexOf(catalog[class_id].name), 1);
        console.log(student.planned_classes);
        updateDisplay();
      } else {
        throw Error;
      }
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  //Currently only returns false if pre-reqs not met.
  //Does not yet display what classes are missing.
  //TODO: Use the class method for verifyPrerequisites
  function verifyPrerequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The prereqs are: ", catalog[id].pre_requisites);
    console.log("You have taken: ", student.current_classes);
    for (var i in catalog[id].pre_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.completed_classes.indexOf(catalog[id].pre_requisites[i]) === -1
          && student.current_classes.indexOf(catalog[id].pre_requisites[i]) === -1) {
        console.log("Class", catalog[id].pre_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }

  return (<React.Fragment>
  <h2 className="class-display-1">Your completed classes:</h2>
  <h2 className="class-display-2">Your current classes:</h2>
  <h2 className="class-display-3">Your planned classes:</h2>
  { 
    catalog.map((catalog) => 
      <React.Fragment>
      <table className="table">
        <tr>
          <td className="column-name">
            <p className={"cs_class"} className={catalog.name}>
              {catalog.name}
            </p>
          </td>
          <td>
            <button onClick = {addCompletedClass.bind(this, catalog.id)}>Apply Credit</button>
          </td>
          <td>
            <button onClick={removeCompletedClass.bind(this, catalog.id)}>Remove Credit</button>
          </td>
          <td>
            <button onClick = {addClass.bind(this, catalog.id)}>Pick Class</button>
          </td>
          <td>
            <button onClick={removeClass.bind(this, catalog.id)}>Remove Class</button>
          </td>
          <td>
            <button onClick = {addClassToPlan.bind(this, catalog.id)}>Add Class To Plan</button>
          </td>
          <td>
            <button onClick={removeClassFromPlan.bind(this, catalog.id)}>Remove From Plan</button>
          </td>
        </tr>
      </table>
      </React.Fragment>
    )
  }
  </React.Fragment>)
}

export default HomeScreen;