import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../context/AppContext";

export const Navbar = () => {
  const {
    store: { favorites },
    actions: { removeFromFavorites },
  } = useAppContext();
  
  function counterFavorites() {
    favorites.length;
    if (favorites.length >= 1) return favorites.length;
    else return "0";
  }
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
            {counterFavorites()}
          </button>
          <ul className="dropdown-menu">
            { 
           favorites.map(element =>{
            return(<li key={element.uid}>
              <div className="d-flex justify-content-between">
                  {element?.name}

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => removeFromFavorites(element.uid)}
                  ></button>
                </div>
            </li>)
           })
           }
          </ul>
        </div>
      </div>
    </nav>
  );
};
