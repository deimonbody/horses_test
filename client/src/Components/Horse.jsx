import React from "react";
import { ProgressBar } from "react-bootstrap";

export const Horse = ({ name, distance }) => {
  return (
    <>
      <p className="mb-1 fs-5 fw-bold">{name}</p>
      <ProgressBar
        variant="warning"
        now={distance}
        min={0}
        max={1000}
        animated
        className="mb-3"
      />
    </>
  );
};
