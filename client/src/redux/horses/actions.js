import { createAction } from "@reduxjs/toolkit";

const updateHorsesList = createAction("UPDATE_HORSES_LIST", (horsesList) => {
  return {
    payload: {
      horsesList,
    },
  };
});

export { updateHorsesList };
