import { useState } from "react";

const App = () => {
    // Step 1: Initialize state
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    // Step 2: Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Step 3: Validate input
    const validate = () => {
        let formErrors = {};

        if (!formValues.name) {
            formErrors.name = "Name is required";
        }

        if (!formValues.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            formErrors.email = "Email address is invalid";
        }

        if (!formValues.password) {
            formErrors.password = "Password is required";
        } else if (formValues.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Step 4: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log("Form submitted successfully", formValues);
            // Process form submission here (e.g., send data to server)
        }
    };

    // Step 5: Render the form
    return (
        <div>
            <h1>Form with Validation</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label>Name:</label>
                        </td>

                        <td>
                            <input
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{errors.name && <p>{errors.name}</p>}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>Email:</label>
                        </td>
                        <td>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{errors.email && <p>{errors.email}</p>}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password:</label>
                        </td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{errors.password && <p>{errors.password}</p>}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} id="btnF">
                            <button  type="submit">
                                Submit
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default App;
