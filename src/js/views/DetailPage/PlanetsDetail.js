import React from "react";
const PlanetsDetail = ({ ...targetResource }) => {
  return (
    <>
      <img
        src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?w=1380&t=st=1694607032~exp=1694607632~hmac=9e8f81fc90844fe6ba305cb02413a40005233ec7150ba46ae5c91c3c89e03ce1"
        className="card-img-top object-fit-cover"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{targetResource?.name}</h5>
        <p className="card-text">
          Learn more about this amazing wonderful Planet!!! blablablablalba
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Climate:</strong> {targetResource.climate}</li>
        <li className="list-group-item"><strong>Diameter:</strong> {targetResource.diameter}</li>
        <li className="list-group-item">
          <strong>Rotation Period:</strong> {targetResource.rotation_period}
        </li>
        <li className="list-group-item">
          <strong>Orbital Period:</strong> {targetResource.orbital_period}
        </li>
        <li className="list-group-item"><strong>Terrain:</strong> {targetResource.terrain}</li>
      </ul>
    </>
  );
};

export default PlanetsDetail;
