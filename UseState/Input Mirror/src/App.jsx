import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState('');
  const inputMirror = (e) => {
        setInput(e.target.value);
    };
    return (
        <>
            <div>
                <input value={input} onChange={inputMirror} placeholder="Type here"></input>
                <p>Input: {input}</p>
            </div>
        </>
    );
}

export default App;
