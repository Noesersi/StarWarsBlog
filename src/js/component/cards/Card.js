import React from "react";
import PlanetsCard from "./PlanetsCard";
import PeopleCard from "./PeopleCard";
import StarshipsCard from "./StarshipCard";
import { Link } from "react-router-dom";
import useAppContext from "../../../context/AppContext";

const Card = ({ uid, targetResource, ...item }) => {

  const {store: { favorites }, actions: { addToFavorites, removeFromFavorites }} = useAppContext();
  const isFavorite = favorites.some(items => items.name === item.name);



  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <div>
          {targetResource === "people" && <PeopleCard {...item} />}
          {targetResource === "planets" && <PlanetsCard {...item} />}
          {targetResource === "vehicles" && <StarshipsCard {...item} />}
        </div>
        <div className="d-flex justify-between">
          <Link to={`/${uid}`} className="btn btn-primary">
            Learn More about {item.name} !
          </Link>
          {/* <button type="button" 
          className="ms-auto btn" 
          onClick={ 
            isFavorite 
            ? () => removeFromFavorites(uid) 
            : addToFavorites(uid, name)
          }
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
                )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;


// gender={item.gender} birth_year={item.birth_year}
// population={item.population} climate={item.climate}
// cargo_capacity={item.cargo_capacity} vehicle_class={item.vehicle_class}