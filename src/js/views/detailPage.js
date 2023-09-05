import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import useAppContext from "../../context/AppContext";


import "../../styles/demo.css";

export const DetailPage = () => {

	const params = useParams();
	const { store } = useAppContext();	
	const {people, planets, vehicles} = store;
	const allResources = [...people, ...planets, ...vehicles];
	const targetResource = allResources.find(items => items.uid == params.uid)
	console.log( "targetresource", targetResource)
	console.log( "allresources", allResources)

	
	
	
	return (
		<div className="container">
			
			{targetResource.name}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
