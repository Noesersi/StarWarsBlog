import React from "react";
const PeopleCard = ({ gender, birth_year, name }) => {
  return (
    <>
        <h5 className="card-title">{name}</h5>
      <img
        src="https://www.clipartmax.com/png/small/208-2088715_star-wars-free-images-baby-star-wars-characters.png"
        className="card-img  img-fluid w-100 h-100 rounded"
        alt="..."
      />
      <p>
        <strong>Gender: </strong>
        {gender}
      </p>
      <p>
        <strong>Birth year:</strong>
        {birth_year}
      </p>
    </>
  );
};

export default PeopleCard;
