import React, { useState } from "react";

export default function Parrot() {
  const [speech, setSpeech] = useState("");

  function handleSpeechFieldChange(e) {
    setSpeech(e.target.value);
  }

  function handleTalkButtonClick() {
    alert(speech);
  }

  return (
    <div>
      <label>
        Speech
        <input onChange={handleSpeechFieldChange} />
      </label>
      <button onClick={handleTalkButtonClick}>Talk</button>
    </div>
  );
}
