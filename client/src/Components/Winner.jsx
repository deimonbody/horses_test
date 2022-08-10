import React from "react";
import winner from "../winner.gif";

export const Winner = ({ name }) => {
  return (
    <div className="d-flex align-items-center w-100 position-fixed top-50 start-50 translate-middle ">
      <div className="col-3">
        <img src={winner} className="w-100 h-100" alt="congratulations"/>
      </div>
      <div className="fs-2 fw-bold text-center flex-grow-1 col-6">
        Winner Horse is <br></br>
        {name}
      </div>
      <div className="col-3">
        <img src={winner} className="w-100 h-100" alt="congratulations"/>
      </div>
    </div>
  );
};
