import socket from "./socket";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHorsesList } from "./redux/horses/actions";
import { HorsesRunning } from "./Components/HorsesRunning";
import { Winner } from "./Components/Winner";

const App = () => {
  const { horses } = useSelector((store) => store.horseReducer);
  const dispatcher = useDispatch();
  const [winnerHorse, setWinnerHorse] = useState(null);

  useEffect(() => {
    socket.emit("start");
    socket.on("userConected", function () {
      dispatcher(updateHorsesList([]));
      setWinnerHorse(null);
      socket.off("ticker");
      socket.on("ticker", function (response) {
        dispatcher(updateHorsesList(response));
      });
    });
  }, []);

  useEffect(() => {
    const isWin = horses.some((horse) => horse.distance === 1000);
    if (isWin) {
      const winHorseIndex = horses.findLastIndex(
        (horse) => horse.distance === 1000
      );
      const horse = horses[winHorseIndex];
      socket.off("ticker");
      setWinnerHorse(horse.name);
    }
  }, [horses]);

  return (
    <>
      <div className="container-sm d-flex flex-column pt-3">
        {winnerHorse ? (
          <Winner name={winnerHorse} />
        ) : (
          <HorsesRunning horses={horses} />
        )}
      </div>
    </>
  );
};

export default App;
