import React, { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";

const Result = forwardRef(({ time, reset }, ref) => {
  const dialog = useRef();
  const timeLeft = (time / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialog} onClose={reset}>
      <p>
        Your result: <strong>{time <= 0 ? "Lost" : "Won"}</strong>
      </p>
      <p>
        You stopped the timer in <strong>{timeLeft} seconds</strong>
      </p>
      <form method="dialog">
        <button onClick={reset}>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
