import React from "react";

const StarshipsCard = ({ vehicle_class, cargo_capacity }) => {
  return (
    <>
      <h5 className="card-title">{name}</h5>
      <img
        src="https://img.freepik.com/free-photo/view-futuristic-looking-spaceship_23-2150675497.jpg?size=626&ext=jpg"
        className="card-img img-fluid w-150 h-150 rounded"
        alt="..."
      />
      <p>
        <strong>Vehicle class: </strong>
        {vehicle_class}
      </p>
      <p>
        <strong>Cargo capacity:</strong>
        {cargo_capacity}
      </p>
    </>
  );
};

export default StarshipsCard;
