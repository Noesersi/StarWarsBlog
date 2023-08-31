import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
      <Link to="/">
        <span className="navbar-brand mx-5 my-3 h1">
          <img
            src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
            alt="logo"
            width="120"
            height="50"
          />
        </span>
      </Link>
      <div className="ms-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle mx-5 my-3"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Favorites 
			{/* {counterFavorites()} */}
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item">
                {/* {store.favoritesList.length > 0 ? (
                  store.favoritesList.map((item, index) => (
                    <Favorites key={index} name={item} />
                  ))
                ) : (
                  <span>Empty</span>
                )} */}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	);
};
