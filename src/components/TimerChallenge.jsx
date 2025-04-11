import React, { useRef, useState } from "react";
import Result from "./Result";

function TimerChallenge({ title, duration }) {
  const timer = useRef();
  const setOpen = useRef();
  const [pressed, setPressed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(duration * 1000);

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setOpen.current.open();
    if (pressed) {
      setPressed((prev) => !prev);
    }
  }
  function handleClick() {
    setPressed((prev) => !prev);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    setPressed((prev) => !prev);
    setOpen.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(duration * 1000);
  }

  return (
    <>
      <Result time={timeRemaining} ref={setOpen} reset={handleReset} />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {duration} second{duration > 1 ? "s" : ""}
        </p>
        <button onClick={pressed ? handleStop : handleClick}>
          {pressed ? "Stop Challenge" : "Start challenge"}
        </button>
        {pressed ? "Timer is running" : "Timer inactive"}
      </div>
    </>
  );
}

export default TimerChallenge;
