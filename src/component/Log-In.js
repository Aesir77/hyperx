import React, { useState } from "react";

function LogIn() {
    // State for input fields
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
<<<<<<< Updated upstream

    // Handle form submission
    const handleSubmit = (event) => {
=======
    const [errorMessage, setErrorMessage] = useState('');


    // Handle form submission
    const handleSubmit = async (event) => {
>>>>>>> Stashed changes
        event.preventDefault();
        if (!inputValue || !inputValue1 || !inputValue2 || !inputValue3) {
            setErrorMessage("All fields are required.");
            return;}

        // Construct the payload to be sent to the backend
        const payload = {
            username: inputValue,
            email: inputValue1,
            password: inputValue2,
            confirmPassword: inputValue3
        };

        try {
            // Send a POST request to the backend
            const response = await fetch('http://localhost:5001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // Handle the response from the backend
            const data = await response.json();
            alert(data.message);

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating your account.');
        }
    };


    return (
        <div className="login">
            <p> Username: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Maranon Joachim'
                />
            </form>

            <p> Email: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    placeholder='name@gmail.com'
                />
            </form>

            <p> Password: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    placeholder='******'
                />
            </form>

<<<<<<< Updated upstream
            <p> Confirm Password: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                    placeholder='******'
                />
            </form>

            <button onClick={handleSubmit}>Submit</button>
=======
    {errorMessage && <p className="error">{errorMessage}</p>}

    <button onClick={handleSubmit}>Submit</button>
>>>>>>> Stashed changes

            <p> Already have an account? Book <a href="./booking">Now!</a> </p>
        </div>
    );
}

<<<<<<< Updated upstream
export default LogIn;
=======
export default LogIn;
>>>>>>> Stashed changes
