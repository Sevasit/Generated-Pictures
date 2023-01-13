import React from "react";
import "./Fetch.css";

const Fetch = (props) => {
  return <div>{props.fetch && <div class="lds-dual-ring"></div>}</div>;
};

export default Fetch;
