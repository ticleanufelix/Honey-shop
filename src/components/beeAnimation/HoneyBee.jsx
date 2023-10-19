import { useEffect, useState } from "react";
import "./beeStyles.css";

const HoneyBee = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const moveProgressBar = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    };

    if (!isMoving) {
      const intervalId = setInterval(moveProgressBar, 10);

      // Oprire automată a progresului după 2 secunde
      setTimeout(() => {
        clearInterval(intervalId);
        setIsMoving(true); // Pornirea animației de deplasare
      }, 200);
    }
  }, [progress, isMoving]);

  return (
    <>
      <div className="honey-main">
        <div className="honey-bee">
          <div id="text">
            <h1>Fagurele de aur</h1>
          </div>
          <div id="bee" className={isMoving ? "moveright" : ""}>
            <div className="head"></div>
            <div className="feelers"></div>
            <div className="body"></div>
            <div className="wingOne"></div>
            <div className="wingTwo"></div>
            <div className="legs"></div>
          </div>
          <div className="background">
            <div className="honey"></div>
            <div className="honey1"></div>
            <div className="honey2"></div>
          </div>
          <div id="progress">
            <div className="bar" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-welcome">Bine ati venit!</p>
        </div>
      </div>
    </>
  );
};

export default HoneyBee;
