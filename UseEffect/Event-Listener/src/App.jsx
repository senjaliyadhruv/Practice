import React, { useState, useEffect } from "react";

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("resize",handleResize);
        
        return () => {
          window.removeEventListener("resize", handleResize);
          window.removeEventListener("resize",handleResize);
        };
    }, [windowWidth,height]);
    document.title=` Width: ${windowWidth}, Height: ${height}`
    return (
        <div>
            <h1>Window Width: {windowWidth}px</h1>
            <h1>Window Height: {height}px</h1>
        </div>
    );
};

export default App;
