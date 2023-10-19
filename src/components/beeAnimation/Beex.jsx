import { useEffect } from "react";
import { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const moveRight = () => {
    setIsMoving(false);
    setTimeout(() => {
      setIsMoving(true);
    }, 100);
  };

  useEffect(() => {
    let intervalId;

    const move = () => {
      if (progress < 100 && isMoving) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    };

    if (isMoving) {
      intervalId = setInterval(move, 15);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [progress, isMoving]);

  return (
    <div>
      <div id="bee" className={isMoving ? "moveright" : ""}>
        {/* Elementul pe care vrei să-l miști */}
      </div>
      <button onClick={moveRight}>Move Right</button>
      <div id="bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
