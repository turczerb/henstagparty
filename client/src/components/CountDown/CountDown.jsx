import { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2025-06-22T10:00:00"); // will come from database.

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date(); // mennyi van vissza azt megkapjuk ha kivonjuk az aktualis datumot a kituzottbol
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  //setup a timer that will update in every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {});

  return (
    <div>
      <h2>Countdown til our amazing Party!</h2>

      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];

        return (
          <div>
            <div>
              <span>{value}</span>
              <span>{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountDown;
