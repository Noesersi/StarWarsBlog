import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleDetail from "./PeopleDetail";
import PlanetsDetail from "./PlanetsDetail";
import StarshipsDetail from "./starshipDetail";
import useAppContext from "../../../context/AppContext";

export const DetailPage = () => {
  const params = useParams();
  const { store } = useAppContext();
  const { people, planets, vehicles, isLoading } = store;
  

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
  console.log("target", targetResource);

  let resourceType;
  if (people.find((person) => person.uid == params.uid)) {
    resourceType = "people";
  } else if (planets.find((planet) => planet.uid == params.uid)) {
    resourceType = "planets";
  } else {
    resourceType = "starships";
  }
  console.log("resourcetype", resourceType);

  return (
    <div className="container">
      <div className="card">
        {targetResource ? (
          <div className="divImage"> 
            <h2 className="p-2">{targetResource.name}</h2>
            {resourceType === "people" && <PeopleDetail {...targetResource} />}
            {resourceType === "starships" && (
              <StarshipsDetail {...targetResource} />
            )}
            {resourceType === "planets" && (
              <PlanetsDetail {...targetResource} />
            )}

            <br />
            <div className="card-body">
              <Link to="/">
                <button className="btn btn-primary ml-auto">Back home</button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
