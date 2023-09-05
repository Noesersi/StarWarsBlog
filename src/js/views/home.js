import React from "react";
import "../../styles/home.css";
import Row from "../component/Row";


export const Home = () => {
  return(
	<main>
    <Row targetResource="people" title="Characters"/>
    <Row targetResource="planets" title="Planets"/>
    <Row targetResource="vehicles" title="Starships"/>

  </main>
)
};
  
