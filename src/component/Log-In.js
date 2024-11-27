<<<<<<< Updated upstream
import React, { useState } from "react";

function LogIn() {
    // State for input fields
=======
<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import "./styling/Hyperx.css";

function LogIn() {
>>>>>>> Stashed changes
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [showPas, setShowPas] = useState(false);
    const [showPas1, setShowPas1] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

<<<<<<< Updated upstream
=======
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputValue || !inputValue1 || !inputValue2 || !inputValue3) {
            setErrorMessage("All fields are required.");
            return;
        }

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

>>>>>>> Stashed changes
    const togglePass = () => {
        setShowPas(!showPas);
    };

    const togglePass1 = () => {
        setShowPas1(!showPas1);
    };

<<<<<<< Updated upstream
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(""); // Clear previous error messages
    
        if (!inputValue || !inputValue1 || !inputValue2 || !inputValue3) {
            setErrorMessage("All fields are required.");
            return;
        }
    
        const payload = {
            username: inputValue,
            email: inputValue1,
            password: inputValue2,
            confirmPassword: inputValue3
        };
    
        try {
            const response = await fetch('http://localhost:5001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setErrorMessage(data.message || 'Failed to create account');
                return;
            }
    
            alert(data.message); // Successfully created account
        } catch (error) {
            console.error('Network error:', error);
            setErrorMessage('Network or server error occurred');
        }
    };
    


    return (
        <div className="login">
            <p>Username:</p>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Kimmy1' 
            />

            <p>Email:</p>
            <input 
                type="text" 
                value={inputValue1} 
                onChange={(e) => setInputValue1(e.target.value)}
                placeholder='name@gmail.com' 
            />

            <p>Password:</p>
            <input 
                type={showPas ? "text" : "password"} 
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
                placeholder='******'
            />
            <button type="button" onClick={togglePass}>
                {showPas ? "Hide" : "Show"}
            </button>

            <p>Confirm Password:</p>
            <input 
                type={showPas1 ? "text" : "password"} 
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
                placeholder='******'
            />
            <button type="button" onClick={togglePass1}>
                {showPas1 ? "Hide" : "Show"}
            </button>

            <button onClick={handleSubmit}>Register</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
=======
    return (
        <div className="login">
            {errorMessage && <p className="error">{errorMessage}</p>}
            
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Maranon Joachim"
                />

                <p>Email:</p>
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    placeholder="name@gmail.com"
                />

                <p>Password:</p>
                <input
                    type={showPas ? "text" : "password"}
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    placeholder="******"
                />
                <button type="button" onClick={togglePass}>
                    {showPas ? "Hide" : "Show"}
                </button>

                <p>Confirm Password:</p>
                <input
                    type={showPas1 ? "text" : "password"}
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                    placeholder="******"
                />
                <button type="button" onClick={togglePass1}>
                    {showPas1 ? "Hide" : "Show"}
                </button>

                <button type="submit">Register</button>
            </form>
>>>>>>> Stashed changes

            <p>Already have an account? Book <a href="./booking">Now!</a></p>
        </div>
    );
}

export default LogIn;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
