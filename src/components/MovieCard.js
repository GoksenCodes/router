import React from "react";

export default function Movie(props) {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.poster} />
    </div>
  );
}
