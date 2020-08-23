import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

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

  function addClass() {
    document.querySelector(".CS1").classList.add("added");
  }
  function removeClass() {
    try {
      document.querySelector(".CS1.added").classList.remove("added");
    } catch (error) {
      alert("You cannot remove a class you did not add.");
    }
  }
  console.log(catalog.slice(0,1));
  return (<React.Fragment className="classes">
  { 
    catalog.map((catalog) => 
      <p className={"cs_class"} onClick={pickClass}>{catalog.name}</p>
    )
  }
  <p>Display just one class</p>
  { 
    catalog.slice(0,1).map((catalog) => 
      <span className={"cs_class"} className={"CS1"} onClick={pickClass}>
        {catalog.name}
      </span>
    )
  }
    <button onClick={addClass}>Pick Class</button>
    <button onClick={removeClass}>Remove Class</button>
  </React.Fragment>)
  
}

export default HomeScreen;