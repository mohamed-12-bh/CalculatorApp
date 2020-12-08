import React from "react";

function Result({ result, equation }) {
  return (
    <div className="result ">
      <p className="pt-2">{result}</p>
      <p>{equation}</p>
    </div>
  );
}

export default Result;
