import React, { useState } from 'react';
import CodeMirror from 'react-codemirror';

export default function Whiteboard() {
  const [code, setCode] = useState('');

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
          mode: 'javascript',
          lineNumbers: true,
          theme: 'material'
        }}
      />
      <button onClick={() => alert(code)}>Submit Code</button>
    </div>
  );
}