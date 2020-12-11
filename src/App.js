import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [Emoji, setEmoji] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var Emoji = emojiDictionary[userInput];
    if (Emoji === undefined) {
      Emoji = "We dont know about this emoji";
    }
    setEmoji((Emoji = emojiDictionary[userInput]));
  }

  function emojiClickHandler(emoji) {
    // processing
    var Emoji = emojiDictionary[emoji];
    setEmoji(Emoji); // react call to show output
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <h2>Put the emoji in the box below:</h2>
      <input onChange={emojiHandler}></input>
      <div className="output">
        <strong>
          <em>
            <span>{Emoji}</span>
          </em>
        </strong>
      </div>
      <h3>Emojies we Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
