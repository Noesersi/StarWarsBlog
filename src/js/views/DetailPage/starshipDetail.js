import React from "react";
import "/workspaces/StarWarsBlog/src/styles/detailCard.css";

const StarshipsDetail = ({ ...targetResource }) => {
  return (
    <div className="container divImage">
      <img
        src="https://media.istockphoto.com/id/1318550796/fr/photo/coloniser-mars.jpg?s=612x612&w=0&k=20&c=GIkkMTILC5X1Nd9xRDshZ1yD16r1FNUmemkhWvp-nIg="
        className="cardDetailImg card-img-top object-fit-cover"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{targetResource?.name}</h5>
        <p className="card-text">
          Learn more about this amazing wonderful starship!!! blablablabllsa
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Model:</strong> {targetResource.model}
        </li>
        <li className="list-group-item">
          <strong>Length:</strong> {targetResource.length}
        </li>
        <li className="list-group-item">
          <strong>Speed:</strong> {targetResource.max_atmosphering_speed}
        </li>
        <li className="list-group-item">
          <strong>Passengers:</strong> {targetResource.passengers}
        </li>
        <li className="list-group-item">
          <strong>Cargo Capacity:</strong> {targetResource.cargo_capacity}
        </li>
      </ul>
    </div>
  );
};

export default StarshipsDetail;
