import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

  const [catalog, setProduct] = useState([]);
  console.log("catalog is",catalog);
  console.log(catalog[0]);
  const class_1 = catalog[0];
  console.log("class1", class_1);
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
  console.log(catalog.slice(0,1));
  return (<div className="classes">
  { 
    catalog.map((catalog) => 
      <p className={"cs_class"} onClick={pickClass}>{catalog.name}</p>
    )
  }
  <p>Display just one class</p>
  { 
    catalog.slice(0,1).map((catalog) => 
      <p className={"cs_class"} onClick={pickClass}>{catalog.name}</p>
    )
  }
    
    {/* <h1>{class_1.name}</h1> */}
  </div>)
  
}

export default HomeScreen;