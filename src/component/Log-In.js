import React from "react";

function LogIn() {
    return(
<div className="log-in">

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Account created! May you enjoy your flight throughout the galaxy!');
    };

    return (
        <div className='login'>

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
                    onChange={(r) => setInputValue1(r.target.value)}
                    placeholder='name@gmail.com'
                />
            </form>

            <p> Password: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={inputValue2}
                    onChange={(r) => setInputValue2(r.target.value)}
                    placeholder='******'
                />
            </form>

            <p> Confirm Password: </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={inputValue3}
                    onChange={(r) => setInputValue3(r.target.value)}
                    placeholder='******'
                />
            </form>

            <button onClick={handleSubmit}> Submit </button>

            <p> Already have an account? Book <a href="./booking">Now!</a> </p>
        </div>
    );


export default LogIn;
