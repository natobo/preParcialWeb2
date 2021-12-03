import React, { useContext } from "react";
import movieImage from "./img/movieImg.svg";
import { LangContext } from "./components/langWrapper";
import MoviesLists from "./components/moviesLists";

function App() {
  const context = useContext(LangContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={movieImage}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <select
                  className="form-select"
                  value={context.locale}
                  onChange={context.selectLanguage}
                >
                  <option value="es">
                    {context.locale === "en" ? "Spanish" : "Español"}
                  </option>
                  <option value="en">
                    {context.locale === "en" ? "English" : "Inglés"}
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <MoviesLists />
      </div>
    </>
  );
}

export default App;
