import "./App.css";
import { useState } from "react";
function App() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = ()=>{
      setCount(count-1);
    }
    return (
        <>
            <h1>React-Counter</h1>
            <h3>Count: {count} </h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    );
}

export default App;
