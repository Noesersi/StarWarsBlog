import React from "react";
const PeopleDetail= ({ ...targetResource }) => {
  return (
    
    <>
      <img src="https://freepngimg.com/thumb/star_wars/23261-6-star-wars-characters-photos.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{targetResource?.name}</h5>
        <p className="card-text">
          Learn more about this amazing wonderful character!!!
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Gender:</strong> {targetResource.gender}</li>
        <li className="list-group-item">
          <strong>Hair Color:</strong> {targetResource.hair_color}
        </li>
        <li className="list-group-item"><strong>Mass:</strong> {targetResource.mass}</li>
        <li className="list-group-item">
          <strong>Birth Year:</strong> {targetResource.birth_year}
        </li>
      </ul>
    </>
  );
};

export default PeopleDetail;
