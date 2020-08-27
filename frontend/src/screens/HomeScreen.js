import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Student from '../student.js';
// import Catalog from '../../../backend/cs_class_catelog.js';

function HomeScreen(props) {
  //Name, completed classes, current classes,
  var student = new Student("Bruin", [], [], [], [], [], []);

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/cs_classes");
      setCatalog(data);
    };
    fetchData();
    return () => {
    };
  }, []);

  var postData = async () => {
    try {
      let result = await fetch('http://localhost:5000/cs_classes', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'myusername'
        })
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

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
    document.querySelector(".class-display-4").textContent = "Your future classes: ";
    for (var i = 0; i < catalog.length; i++) {
      if (!student.is_scheduled(catalog[i].credit) && verifyPlannedPrerequisites(catalog[i].id))
      document.querySelector(".class-display-4").textContent += "\"" + catalog[i].name + ",\" ";
    }
  }

  //Does not yet display what classes are missing.
  function verifyPrerequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The prereqs are: ", catalog[id].pre_requisites);
    console.log("You have taken: ", student.completed_class_credit);
    for (var i in catalog[id].pre_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.completed_class_credit.indexOf(catalog[id].pre_requisites[i]) === -1) {
        console.log("Class", catalog[id].pre_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }

  function verifyPlannedPrerequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The prereqs are: ", catalog[id].pre_requisites);
    console.log("You have taken: ", student.completed_class_credit);
    console.log("You will have taken: ", student.current_class_credit);
    for (var i in catalog[id].pre_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.completed_class_credit.indexOf(catalog[id].pre_requisites[i]) === -1
          && student.current_class_credit.indexOf(catalog[id].pre_requisites[i]) === -1) {
        console.log("Class", catalog[id].pre_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }

  function verifyCorequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The coreqs are: ", catalog[id].co_requisites);
    console.log("You have taken: ", student.completed_class_credit);
    console.log("You are taking: ", student.current_class_credit);
    for (var i in catalog[id].co_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.completed_class_credit.indexOf(catalog[id].co_requisites[i]) === -1
          && student.current_class_credit.indexOf(catalog[id].co_requisites[i]) === -1) {
        console.log("Class", catalog[id].co_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }

  function verifyPlannedCorequisites(id) {
    console.log("ID entered is ", id);
    console.log("This correlates to class: ", catalog[id].name);
    console.log("The coreqs are: ", catalog[id].co_requisites);
    console.log("You have taken: ", student.completed_class_credit);
    console.log("You are taking: ", student.current_class_credit);
    console.log("You will be taking: ", student.planned_class_credit);
    for (var i in catalog[id].co_requisites) {
      console.log("checking if prereq ", i, " is met");
      if (student.completed_class_credit.indexOf(catalog[id].co_requisites[i]) === -1
          && student.current_class_credit.indexOf(catalog[id].co_requisites[i]) === -1
          && student.planned_class_credit.indexOf(catalog[id].co_requisites[i]) === -1) {
        console.log("Class", catalog[id].co_requisites[i], "is not met!");
        return false;
      }
    }
    return true;
  }

  function addCompletedClass(class_id) {
    try {
      if (!student.is_scheduled(catalog[class_id].credit)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("completed");
        student.completed_classes.push(catalog[class_id].name);
        student.completed_class_credit.push(catalog[class_id].credit);
        console.log(student.completed_classes);
        console.log(student.completed_class_credit);
        updateDisplay();
      } else {
        alert("You already have credit for this class or have not met pre-requisites!");
      }
    } catch (error) {
      alert("ERROR");
    }
  }

  //TODO: Remove or warn other classes that may not be applicable
  function removeCompletedClass(class_id) {
    try {
      if (student.completed_classes.indexOf(catalog[class_id].name) !== -1) {
        let tag = "." + catalog[class_id].name + ".completed";
        document.querySelector(tag).classList.remove("completed");
        student.completed_classes.splice(student.completed_classes.indexOf(catalog[class_id].name), 1);
        student.completed_class_credit.splice(student.completed_class_credit.indexOf(catalog[class_id].credit), 1);
        console.log(student.completed_classes);
        console.log(student.completed_class_credit);
        updateDisplay();
      } else {
        throw Error("You cannot remove a class you did not complete.");
      }
    } catch (error) {
      alert(error);
    }
  }

  function addClass(class_id) {
    try {
      if (!student.is_scheduled(catalog[class_id].credit) && verifyPrerequisites(class_id) && verifyCorequisites(class_id)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("added");
        student.current_classes.push(catalog[class_id].name);
        student.current_class_credit.push(catalog[class_id].credit);
        console.log(student.current_classes);
        console.log(student.current_class_credit);
        updateDisplay();
      } else {
        alert("You already have credit for this class or have not met pre-requisites!");
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
        student.current_class_credit.splice(student.current_class_credit.indexOf(catalog[class_id].credit), 1);
        console.log(student.current_classes);
        console.log(student.current_class_credit);
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
      console.log("Adding class to plan");
      if (!student.is_scheduled(catalog[class_id].credit) && verifyPlannedPrerequisites(class_id) && verifyPlannedCorequisites(class_id)) {
        let tag = "." + catalog[class_id].name;
        document.querySelector(tag).classList.add("planned");
        student.planned_classes.push(catalog[class_id].name);
        student.planned_class_credit.push(catalog[class_id].credit);
        console.log(student.planned_classes);
        console.log(student.planned_class_credit);
        updateDisplay();
      } else {
        alert("You already have credit for this class or have not met pre-requisites!");
      }
    } catch {
      alert("ERROR");
    }
  }

  function removeClassFromPlan(class_id) {
    try {
      if (student.planned_classes.indexOf(catalog[class_id].name) !== -1) {
        let tag = "." + catalog[class_id].name + ".planned";
        document.querySelector(tag).classList.remove("planned");
        student.planned_classes.splice(student.planned_classes.indexOf(catalog[class_id].name), 1);
        student.planned_class_credit.splice(student.planned_class_credit.indexOf(catalog[class_id].credit), 1);
        console.log(student.planned_classes);
        console.log(student.planned_class_credit);
        updateDisplay();
      } else {
        throw Error;
      }
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }

  function hide(major) {
    // document.querySelector(".CS").classList.add("hide");
    let compsci = document.getElementsByClassName(major);
    for (let i in compsci) {
      compsci.item(i).classList.add("hide");
    }
  };

  function show(major) {
    try {
      let compsci = document.getElementsByClassName(major);
      for (let i in compsci) {
        compsci.item(i).classList.remove("hide");
      }
    } catch (error) {
    }
  };

  return (
    <React.Fragment>
      <div className="left">
        <br/>
        <br/>
        <br/>
        <br/>
        <table className="show-hide-buttons">
          <tr>
            <td>
              <button onClick={postData}>POST</button>
            </td>
            <td>
              <button onClick={show.bind(this, "CS")}>Show CS</button>
            </td>
            <td>
              <button onClick={hide.bind(this, "CS")}>Hide CS</button>
            </td>
            <td>
              <button onClick={show.bind(this, "ECE")}>Show ECE</button>
            </td>
            <td>
              <button onClick={hide.bind(this, "ECE")}>Hide ECE</button>
            </td>
            <td>
              <button onClick={show.bind(this, "MATH")}>Show MATH</button>
            </td>
            <td>
              <button onClick={hide.bind(this, "MATH")}>Hide MATH</button>
            </td>
            <td>
              <button onClick={show.bind(this, "PHYSICS")}>Show PHYSICS</button>
            </td>
            <td>
              <button onClick={hide.bind(this, "PHYSICS")}>Hide PHYSICS</button>
            </td>
          </tr>
        </table>
        <br/>
        <br/>
        { 
          catalog.map((catalog) => 
            <React.Fragment>
            <table className="table">
              <tr className={catalog.major}>
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
      </div>
      <div className="right">
        <br/>
        <br/>
        <br/>
        <h2 className="class-display-1">Your completed classes:</h2>
        <h2 className="class-display-2">Your current classes:</h2>
        <h2 className="class-display-3">Your planned classes:</h2>
        <h2 className="class-display-4" onLoad={updateDisplay}>Your future classes:</h2>
      </div>
    </React.Fragment>
  )
}

export default HomeScreen;