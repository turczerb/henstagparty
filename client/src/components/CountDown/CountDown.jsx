import { useState, useEffect } from "react";
import styled from "styled-components"; //css

const CountDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  color: rgba(176, 146, 89, 1);
`;

const RealCountdown = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  color: rgba(176, 146, 89, 1);
`;

const DataSpan = styled.span``;

const COUNTDOWN_TARGET = new Date("2025-07-22T10:00:00"); // will come from database.

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date(); // mennyi van vissza azt megkapjuk ha kivonjuk az aktualis datumot a kituzottbol
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const sec = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, sec };
};

const CountDown = ({ id }) => {
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
      <CountDownContainer id={id}>
        <h2>Countdown 'til our amazing Party!</h2>
      </CountDownContainer>

      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];

        return (
          <RealCountdown>
            <div>
              <DataSpan>{value}</DataSpan>
              <DataSpan>{label}</DataSpan>
            </div>
          </RealCountdown>
        );
      })}
    </div>
  );
};

export default CountDown;
