import React from "react";

const PlanetsCard = ({ population, climate, name }) => {
  return (
    <>
      <h5 className="card-title">{name}</h5>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/22/58/stars-1837306_1280.jpg"
        className="card-img img-fluid w-150 h-150 rounded"
        alt="..."
      />

      <p>
        <strong>Population: </strong>
        {population}
      </p>
      <p>
        <strong>Climate:</strong>
        {climate}
      </p>
    </>
  );
};

export default PlanetsCard;
