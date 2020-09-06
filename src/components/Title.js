import React from "react";

function Title(props) {
  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-2">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  );
}

export default Title;