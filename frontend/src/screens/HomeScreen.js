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
    }
    return <div className="classes">
    { 
      catalog.map((catalog) => 
        <p className={catalog.name} onClick={pickClass}>{catalog.name}</p>
      )
    }
    </div>
}

export default HomeScreen;