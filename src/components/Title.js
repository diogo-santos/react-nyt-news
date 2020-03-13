import React from "react";

function Title(props) {
  return (
    <h1>{props.title} ({props.postCount})</h1>
  );
}

export default Title;