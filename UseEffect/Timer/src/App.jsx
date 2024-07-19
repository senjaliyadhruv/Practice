import { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [second, setSecond] = useState(new Date().getSeconds());
    const [minute, setMinute] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours());
        });
        return () => clearInterval(interval);
    },[hour]);
    useEffect(() => {
        const interval = setInterval(() => {
            setMinute(new Date().getMinutes());
        });
        return () => clearInterval(interval);
    },[minute]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(new Date().getSeconds());
        }, 1000);
        return () => clearInterval(interval);
      }, [second]);
      document.title = `Time: ${hour} : ${minute} : ${second}`;

    return (
        <>
            <div>
                <p>Current Hour: {hour}</p>
                <p>Current Minute: {minute}</p>
                <p>Current Seconds: {second} </p>
            </div>
        </>
    );
}

export default App;
