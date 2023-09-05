import React from "react";
import Card from "./cards/Card";
import "../../styles/home.css";
import useResources from "../../hooks/useResources";
import useAppContext from "../../context/AppContext";

const Row = ({ title, targetResource }) => {

  const {store} = useAppContext();
  const { isLoading } = store;
  const resources = store[targetResource]

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="container mb-3">
      <h2 className="titulo">{title}</h2>
      <div className="carousel">
        {resources.map((item, index) => (
          <Card key={index} name={item.name} targetResource={targetResource}  {...item} />
        ))}
        ;
      </div>
    </section>
  );
};

export default Row;
