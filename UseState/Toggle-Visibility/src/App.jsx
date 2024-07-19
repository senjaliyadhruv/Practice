import { useState } from "react";

import "./App.css";

function App() {
    const [isVisible, setIsvisible] = useState(false);
    const toggelVisibility = () => {
        setIsvisible(!isVisible);
    };

    return (
        <>
            <div>
                <button onClick={toggelVisibility}>
                    {isVisible ? "Hide" : "Show"} Content
                </button>
                {isVisible && <p>This is the content that will be toggle</p>}
            </div>
        </>
    );
}

export default App;
