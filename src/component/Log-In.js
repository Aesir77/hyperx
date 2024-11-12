<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import React, { useState } from 'react';
import "./styling/Hyperx.css";

function LogIn() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
<<<<<<< Updated upstream

    const handleSubmit = (event) => {
    event.preventDefault();
    };
=======
    const [showPas, setshowPas] = useState(false);
    const [showPas1, setshowPas1] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Account created! May you enjoy your hyperdrive throughout the galaxy!');
    };

    const togglePass = () => {
        setshowPas(!showPas);
    }
    const togglePass1 = () => {
        setshowPas1(!showPas1);
    }

>>>>>>> Stashed changes
    return (
        <div className='login'>

<p> Username: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)}
<<<<<<< Updated upstream
    placeholder='Maranon Joachim' />
=======
    placeholder='Kimmy1' />
>>>>>>> Stashed changes

    </form>
<p> Email: </p>
    <form onSubmit={handleSubmit}>
<<<<<<< Updated upstream
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)}
=======
    <input type="text" value={inputValue1} onChange={(e) =>
    setInputValue1(e.target.value)}
>>>>>>> Stashed changes
    placeholder='name@gmail.com' />
    </form>

    <p> Password: </p>
    <form onSubmit={handleSubmit}>
<<<<<<< Updated upstream
    <input type="text" value={inputValue3} onChange={(r) =>
    setInputValue3(r.target.value)} 
    placeholder='******'/>
=======
    <input type= {showPas ? "text" : "password"} value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    placeholder='******'/>

                    <button type = "button" onClick={togglePass}> {showPas ? "Hide" : "Show"} </button>
>>>>>>> Stashed changes
    </form>
    
    <p> Confirm Password: </p>
    <form onSubmit={handleSubmit}>
<<<<<<< Updated upstream
    <input type="text" value={inputValue3} onChange={(r) =>
    setInputValue3(r.target.value)} 
    placeholder='******'/>
    </form>

    <button> Submit </button>

    <p> Already have an account? Book <a href = "./booking"> Now! </a> </p>
    </div>
=======
    <input type={showPas1 ? "text" : "password"} value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                    placeholder='******'/>

<button type = "button" onClick={togglePass1}> {showPas1 ? "Hide" : "Show"} </button>
    </form>

    <button onClick={handleSubmit}> Register </button>

            <p> Already have an account? Book <a href="./booking">Now!</a> </p>
        </div>

>>>>>>> Stashed changes

   
    );
    }

export default LogIn;

<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
