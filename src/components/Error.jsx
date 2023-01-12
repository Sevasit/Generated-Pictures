import React from "react";

const Error = (props) => {
  return (
    <div>
      {props.error && (
        <p className="mt-5 text-rose-600 font-bold">{props.error}</p>
      )}
    </div>
  );
};

export default Error;
