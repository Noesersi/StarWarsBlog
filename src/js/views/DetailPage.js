import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const DetailPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<h2>DetailPage</h2>
		
	);
};
