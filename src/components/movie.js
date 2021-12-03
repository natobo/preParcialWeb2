import React, { useContext } from "react";
import { FormattedDate, FormattedNumber } from "react-intl";
import { LangContext } from "./langWrapper";

const Movie = (props) => {
  const context = useContext(LangContext);
  return (
    <tr>
      <th scope="row">{props.movie.id}</th>
      <td>{props.movie.name}</td>
      <td>{props.movie.directedBy}</td>
      <td>{props.movie.country}</td>
      <td>
        {`${props.movie.budget} ${
          context.locale === "en" ? "million" : "millones"
        }`}
      </td>
      <td>
        <FormattedNumber value={props.movie.views}></FormattedNumber>
      </td>
      <td>
        <FormattedDate
          value={new Date(props.movie.releaseDate)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
    </tr>
  );
};

export default Movie;
