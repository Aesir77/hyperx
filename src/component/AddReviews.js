import React, { useState } from 'react';
import axios from 'axios';
import "./styling/Hyperx.css";

function AddReview() {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/reviews', { name, rating, comment });
            setMessage(response.data.message);
            setName('');
            setRating('');
            setComment('');
        } 
        catch (error) {
            console.error(error);
            setMessage('Error adding review');
        }
    };

    return (
        <div className="add-review">
            <h1>Write a Review</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                    <option value="">Rating</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num} Star{num > 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
                <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}

export default AddReview;
