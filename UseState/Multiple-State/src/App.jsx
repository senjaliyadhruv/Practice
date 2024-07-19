import { useState } from "react";

import "./App.css";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fName = (e) => {
        setFirstName(e.target.value);
    };
    const lName = (e) => {
        setLastName(e.target.value);
    };
    return (
        <>
            <div>
                <input
                    type="text"
                    value={firstName}
                    onChange={fName}
                    placeholder="First Name"
                />
                <br />
                <input
                    type="text"
                    value={lastName}
                    onChange={lName}
                    placeholder="Last Name"
                />
                <p>
                    {firstName} {lastName}
                </p>
            </div>
        </>
    );
}

export default App;
