<<<<<<< Updated upstream
import React from "react";
=======
<<<<<<< Updated upstream
=======
import React from "react";
import './styling/reviews.css'; 
const reviewsData = [
  {
    name: "Jane Doe",
    rating: 5,
    comment: "Good service, good staff and good food",
  },
  {
    name: "John Doe",
    rating: 4,
    comment: "Great location and comfortable rooms. Would definitely stay here again!",
  },
  {
    name: "Patrick Vidanes",
    rating: 5,
    comment: "The best hotel I've ever stayed at! Highly recommend the breakfast.",
  },
  {
    name: "Jemanuel Lasquite",
    rating: 3,
    comment: "Decent stay, but I expected more from the service.",
  },
  {
    name: "Jaden Barana",
    rating: 1,
    comment: "Serve your own breakfast.",
  },
];
>>>>>>> Stashed changes

function Reviews() {
  return (
    <div className="reviews">
<<<<<<< Updated upstream
      {/* Add your review content here */}
=======
      <h1>Recent Reviews From Customers</h1>
      <div className="reviews-list">
        {reviewsData.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <div className="rating">{'⭐'.repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default Reviews;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
