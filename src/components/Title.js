import React from "react";

function Title(props) {
  return (
    <h2>{`${props.title} (${props.postCount})`}</h2>
  );
}

export default Title;