import React, { useState } from "react";
import CodeMirror from "react-codemirror";

<<<<<<< HEAD:src/components/WhiteBoard/Whiteboard.js
function Whiteboard() {
  const [code, setCode] = useState("");
=======
export default function Whiteboard() {
  const [code, setCode] = useState('');
>>>>>>> 6da7058a34e9434476cad9d96940c8beb4f4f4b4:src/components/Whiteboard.js

  function handleChange(newCode) {
    setCode(newCode);
  }

  return (
    <div>
      <h1>Coding Assessment</h1>
      <p>Write your code in the editor below:</p>
      <CodeMirror
        value={code}
        onChange={handleChange}
        options={{
          mode: "javascript",
          lineNumbers: true,
          theme: "material",
        }}
      />
      <button onClick={() => alert(code)}>Submit Code</button>
    </div>
  );
}
export default Whiteboard;
