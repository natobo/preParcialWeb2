import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { LangContext } from "./langWrapper";
import Movie from "./movie";

function MoviesLists() {
  const context = useContext(LangContext);

  return (
    <div>
      {context.loading ? (
        <h3>Loading</h3>
      ) : (
        <table className="table">
          <thead
            className={context.locale === "en" ? "table-dark" : "table-light"}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="name" />
              </th>
              <th scope="col">
                <FormattedMessage id="directedBy" />
              </th>
              <th scope="col">
                <FormattedMessage id="country" />
              </th>
              <th scope="col">
                <FormattedMessage id="budget" />
              </th>
              <th scope="col">
                <FormattedMessage id="views" />
              </th>
              <th scope="col">
                <FormattedMessage id="releaseDate" />
              </th>
            </tr>
          </thead>
          <tbody>
            {context.messages.movies.map((m, i) => (
              <Movie key={i} movie={m} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MoviesLists;
