import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import useAppContext from "../../../context/AppContext";

export const DetailPage = () => {
  const params = useParams();
  const { store } = useAppContext();
  const { people, planets, vehicles, isLoading } = store;
  console.log("target", targetResource)

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const allResources = [...people, ...planets, ...vehicles];
  const targetResource = allResources.find((items) => items.uid == params.uid);
  console.log("target", targetResource)
  
  let resourceType;
  if (people.find((person) => person.uid == params.uid)) {
    resourceType = "people";
  } else if (planets.find((planet) => planet.uid == params.uid)) {
    resourceType = "planets";
  } else {
    resourceType = "starships";
  }
  console.log("resourcetype", resourceType)


  return (
    <div className="container">
      {targetResource ? (
        <div>
          <h2>{targetResource.name}</h2>
        {resourceType === "people" && (
          <>
            <p>Gender: {targetResource.gender}</p>
            <p>Hair Color: {targetResource.hair_color}</p>
            <p>Mass: {targetResource.mass}</p>
            <p>Birth Year: {targetResource.birth_year}</p>

            

          </>
        )}
        {resourceType === "planets" && (
          <>
            <p>Climate: {targetResource.climate}</p>
            <p>Diameter: {targetResource.diameter}</p>
            <p>Rotation Period: {targetResource.rotation_period}</p>
            <p>Orbital Period: {targetResource.orbital_period}</p>
            <p>Terrain: {targetResource.terrain}</p>


          </>
        )}
        {resourceType === "starships" && (
          <>
            <p>Model: {targetResource.model}</p>
            <p>Length: {targetResource.length}</p>
            <p>Speed: {targetResource.max_atmosphering_speed}</p>
            <p>Passengers: {targetResource.passengers}</p>
            <p>Cargo Capacity: {targetResource.cargo_capacity}</p>
          </>
        )}

          <br />
          <Link to="/">
            <button className="btn btn-primary">Back home</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
