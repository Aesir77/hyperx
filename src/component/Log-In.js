import React, { useState } from "react";

function LogIn() {
    // State for input fields
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Account created! May you enjoy your flight throughout the galaxy!');
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

            <p> Already have an account? Book <a href="./booking">Now!</a> </p>
        </div>
    );
}

export default LogIn;
