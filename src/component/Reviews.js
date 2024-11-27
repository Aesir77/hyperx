import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styling/reviews.css';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5001/reviews');
                setReviews(response.data);
            } 
            catch (error) {
                console.error('Error fetching reviews', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="reviews">
            <h1>Recent Reviews From Customers</h1>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <h3>{review.name}</h3>
                        <div className="rating">{'⭐'.repeat(review.rating)}</div>
                        <p>{review.comment}</p>
                        <p className="date">{new Date(review.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;