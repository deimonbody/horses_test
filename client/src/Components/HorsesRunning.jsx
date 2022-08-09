import React from "react";
import { Horse } from "./Horse";
import { Loader } from "./Loader";

export const HorsesRunning = ({ horses }) => {
  return (
    <>
      <h1 className="fs-3 text-center">Horses Running</h1>
      {horses.length ? (
        horses.map((horse) => {
          return <Horse name={horse.name} distance={horse.distance} />;
        })
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle pt-4">
          <Loader />
        </div>
      )}
    </>
  );
};
