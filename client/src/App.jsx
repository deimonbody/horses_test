import socket from "./socket";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHorsesList } from "./redux/horses/actions";
import { HorsesRunning } from "./Components/HorsesRunning";
import { Winner } from "./Components/Winner";

function App() {
  const { horses } = useSelector((store) => store.horseReducer);
  const dispatcher = useDispatch();
  const [winnerHorse, setWinnerHorse] = useState(null);

  useEffect(() => {
    socket.on('userConected',function(){
      dispatcher(updateHorsesList([]));
      setWinnerHorse(null);
      socket.emit('start');
      socket.on("ticker", function (response) {
        dispatcher(updateHorsesList(response));
      });
    })
   
  }, []);

  useEffect(() => {
    if(!horses.length){
      setWinnerHorse(null);
      return;
    } 
    const isWin = horses.some((horse) => horse.distance === 1000);
    if (isWin) {
      const horseIndex = horses.findLastIndex((horse) => horse.distance === 1000);
      const horse = horses[horseIndex];
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
}

export default App;
