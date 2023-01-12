import React from "react";

const Fetch = (props) => {
  return (
    <div>
      {props.fetch && (
        <p className="mt-5 text-lg font-bold text-violet-800">
          Image is loading...
        </p>
      )}
    </div>
  );
};

export default Fetch;
