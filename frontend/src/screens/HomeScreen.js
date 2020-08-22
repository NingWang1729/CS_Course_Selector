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
  }
  
  return <div className="classes">
  { 
    catalog.map((catalog) => 
      <p id = {catalog[0]} className={catalog[0]} className="cs_class" onClick={pickClass}>{catalog[0]}</p>
    )
  }
  </div>
}

export default HomeScreen;