import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  const [info, setInfo] = useState([]);
  const [id, setID] = useState(1);
  const [results, setResults] = useState([]);
  const {name,type,dimension} = info;
  const api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(()=>{
      (async function(){
          const data = await fetch(api).then(res=>res.json())
          console.log(data)
          setInfo(data);

          const a = await Promise.all(
              data.residents.map((x)=>{
                  return fetch(x).then(res=>res.json())
              })
              )
              setResults(a);

        })();
  },[api]);

  return (
    <div className="container">
      <div className="row mb-4">
          <h1 className="text-center">Location : <span className="text-primary">{name === "" ? "Unknown" : name}</span> </h1>
          <h4 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}  </h4>
          <h6 className="text-center">Type: {type === "" ? "Unknown" : type}  </h6>
      </div>
      <div className="row">
          <div className="col-3 text-center">
          <h4 className="text-center mb-4">
        Pick Location
        </h4>
              <InputGroup name="Location" total={126} setID={setID} />
          </div>
          <div className="col-8">
              <div className="row">
                  <Cards results={results}/>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Location;
