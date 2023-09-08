import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import useAppContext from "../../context/AppContext";




export const DetailPage = () => {

	const params = useParams();
	const { store } = useAppContext();	
	const {people, planets, vehicles, isLoading} = store;
	
	if (isLoading) {
		return (
		  <div className="d-flex justify-content-center">
			<div className="spinner-border" role="status">
			  <span className="visually-hidden">Loading...</span>
			</div>
		  </div>
		);
	  }
	
	const allResources = [...people, ...planets, ...vehicles];
	const targetResource = allResources.find(items => items.uid == params.uid)
	
	return (
		<div className="container">
		  {targetResource ? (
			<div>
				
			  {targetResource.name}
			  <br />
			  <Link to="/">
				<button className="btn btn-primary">Back home</button>
			  </Link>
			</div>
		  ) : (
			<p>Loading...</p>
		  )}
		</div>
	  );
};
