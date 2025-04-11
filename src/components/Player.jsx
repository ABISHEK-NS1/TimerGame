import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [nameChanged, setNameChanged] = useState("");

  function handleClick() {
    setNameChanged(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {nameChanged != "" ? nameChanged : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
