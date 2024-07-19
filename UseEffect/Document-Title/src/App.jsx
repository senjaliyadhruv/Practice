import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = ()=>{
      setCount(count-1);
    }
    useEffect(()=>{
      document.title=`Count: ${count}`;
    },[count]);
    return (
        <>
            <h1>React-Counter</h1>
            <h3>Count: {count} </h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    );
}

export default App
