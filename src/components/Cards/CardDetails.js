import React,{ useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const CardDetails = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState([])
  const {name, gender, origin, image, location, species, status, type} = character
  const api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(()=>{
    (async function() {
      const data = await fetch(api).then(res=>res.json())
      setCharacter(data)
    })()
  },[api])

  return (
  <div className="container d-flex justify-content-center">
    <div className="d-flex flex-column gap-3">
    <h1 className="text-center">{name}</h1>
    <img src={image} alt={name} className="img-fluid"/>
    {(()=>{
              if(status==="Dead"){
                  return(
                <div className="fs-5 badge bg-danger">
                {status}
              </div>
                  )
              }
              else if(status==="Alive"){
                return(
                    <div className="fs-5 badge bg-success">
                    {status}
                  </div>
                      )
              }
              else{
                return(
                    <div className="fs-5 badge bg-secondary">
                    {status}
                  </div>
                      )
              }
          })()}
          <div className="content">
            <div>
              <span className="fw-bold">Gender : </span>
              {gender}
            </div>
            <div>
              <span className="fw-bold">Species : </span>
              {species}
            </div>
            <div>
              <span className="fw-bold">Type : </span>
              {type === "" ? "Unknown" : type}
            </div>
            <div>
              <span className="fw-bold">Location : </span>
              {location?.name}
            </div>
            <div>
              <span className="fw-bold">Origin : </span>
              {origin?.name}
            </div>
          </div>
    </div>
    

  </div>);
};

export default CardDetails;
