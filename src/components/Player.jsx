import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClickEditSave() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameVisible = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameVisible = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameVisible}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEditSave}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
