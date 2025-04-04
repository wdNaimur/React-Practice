import { useState } from "react";

function Batsman() {
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const handleSingle = () => {
    setRuns(runs + 1);
    setBalls(balls + 1);
  };
  const handleFour = () => {
    setRuns(runs + 4);
    setBalls(balls + 1);
  };
  const handleSix = () => {
    setRuns(runs + 6);
    setBalls(balls + 1);
  };
  const handledot = () => {
    setRuns(runs + 0);
    setBalls(balls + 1);
  };
  return (
    <div>
      <h3>Player Name: </h3>
      {runs >= 50 && <div>Congratulations</div>}

      <h4>Score: {runs}</h4>
      <h5>Balls: {balls}</h5>
      <div className="btnGroup">
        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
        <button onClick={handledot}>Dot</button>
      </div>
    </div>
  );
}
export default Batsman;
