import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <section>
      <h1>HOOKS EXERCISE 1</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </section>
  );
}
